/* ============================================================
   تحدي الحروف — منطق النشاط
   منقول كما هو من النسخة النهائية v3 دون أي تغيير في المنطق.
   ============================================================ */
(function(){
"use strict";

/* ================= البيانات ================= */
var QUESTIONS = [];

var LETTERS = ["أ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","هـ","و","ي"];
var CATS = ["رياضة","تاريخ","علامات تجارية","دول وعواصم","علوم","ألغاز","تقنية","أسئلة دينية","جغرافيا ومعالم","لغة عربية وكلمات","حيوانات","نباتات","ثقافة عامة ومنطق"];
/* ألوان الفرق — منسجمة مع هوية أنشطة ومتمايزة بوضوح على السبورة.
   جميعها فوق 4.5:1 تباينًا مع النص الأبيض. */
var PALETTE = ["#5E4B73","#245B78","#367A55","#A87724","#A44747","#3F6B68","#596B7A","#6A4E3B"];
var LIGHTS  = ["#EEEAF3","#E8F1F6","#E7F3EC","#F7F0E1","#F8EAEA","#E8F0EF","#EDF0F3","#F1ECE8"];
var ICONS   = ["⭐","🏆","🎯","💡"];
var DEFAULTS= ["فريق النجوم","فريق الأبطال","فريق التحدي","فريق الإبداع"];
var STAGES  = {primary_lower:"ابتدائي 1–3", primary_upper:"ابتدائي 4–6", middle:"متوسط", secondary:"ثانوي"};
var STAGE_HINT = {primary_lower:"أسئلة مباشرة وبسيطة", primary_upper:"أسئلة مباشرة أطول قليلاً", middle:"أسئلة وصفية", secondary:"أسئلة تحليلية"};

/* ================= الحالة ================= */
var S = {
  teacher:"", school:"", className:"", stage:"", categories:[], teamCount:2,
  names:DEFAULTS.slice(), colors:[0,1,2,3], rounds:5, time:30
};
var step=1, teams=[], team=0, usedLetters={}, usedQ={},
    currentLetter=null, currentQ=null, phase="board", turns=0,
    tv=0, tid=null, paused=false, sound=true, ac=null;

var QUESTION_BANK_CONFIG = null;

function showLoadError(message){
  show("wizard");
  $("wc").innerHTML = '<div class="title">تعذّر تحميل بنك الأسئلة</div>'
    + '<div class="subtitle">'+esc(message)+'</div>';
  $("nav").innerHTML = '<button class="btn btn-primary" type="button" onclick="location.reload()">إعادة المحاولة</button>';
}

function validateQuestions(items, stage){
  if(!Array.isArray(items) || !items.length) throw new Error("بنك "+STAGES[stage]+" فارغ أو غير صالح.");
  return items.map(function(q){
    if(!q || !q.id || !q.category || !q.letter || !q.question || !q.answer){
      throw new Error("يوجد سؤال ناقص البيانات في بنك "+STAGES[stage]+".");
    }
    return Object.assign({}, q, {stage:stage});
  });
}

function loadQuestionBank(){
  show("wizard");
  $("wc").innerHTML = '<div class="title">جارٍ تحميل بنك الأسئلة…</div>'
    + '<div class="subtitle">يتم الآن مزامنة أحدث نسخة من البنك.</div>';
  $("nav").innerHTML = "";

  fetch("config.json", {cache:"no-store"})
    .then(function(response){
      if(!response.ok) throw new Error("تعذّر قراءة إعدادات النشاط.");
      return response.json();
    })
    .then(function(config){
      QUESTION_BANK_CONFIG = config;
      var base = String(config.questionsPath || "").replace(/\/$/, "");
      var banks = config.questionBanks || {};
      return Promise.all(Object.keys(STAGES).map(function(stage){
        if(!banks[stage]) throw new Error("لم يُحدّد ملف بنك "+STAGES[stage]+".");
        return fetch(base+"/"+banks[stage], {cache:"no-store"}).then(function(response){
          if(!response.ok) throw new Error("تعذّر تحميل بنك "+STAGES[stage]+".");
          return response.json();
        }).then(function(items){ return validateQuestions(items, stage); });
      }));
    })
    .then(function(groups){
      QUESTIONS = [].concat.apply([], groups);
      render();
    })
    .catch(function(error){
      console.error(error);
      showLoadError(error.message || "حدث خطأ غير متوقع أثناء تحميل البنك.");
    });
}

/* ================= أدوات ================= */
function $(id){ return document.getElementById(id); }
function esc(v){ return String(v).replace(/[&<>"']/g,function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
function show(id){ ["wizard","game","results"].forEach(function(x){ $(x).classList.remove("active"); });
  $(id).classList.add("active"); }
function err(m){ var e=$("err"); e.textContent=m||""; e.classList.toggle("show", !!m); }
function pool(){ return QUESTIONS.filter(function(q){
  return q.stage===S.stage && S.categories.indexOf(q.category)>=0; }); }
function availableLetters(){ var s={}; pool().forEach(function(q){ s[q.letter]=1; });
  return LETTERS.filter(function(l){ return s[l]; }); }
function maxRounds(){ return Math.max(1, Math.floor(availableLetters().length / S.teamCount)); }

/* ================= الويزارد ================= */
function drawSteps(){
  $("steps").innerHTML = [1,2,3,4,5,6].map(function(n){
    var cls = step===n ? "active" : (step>n ? "done" : "");
    return '<div class="step-dot '+cls+'">'+(step>n?"✓":n)+'</div>';
  }).join("");
}

function render(){
  drawSteps(); err("");
  var c=$("wc"), n=$("nav");

  if(step===1){
    c.innerHTML = '<div class="title">بيانات المعلم</div>'
      + '<div class="subtitle">أدخل اسم المعلم، ويمكن إضافة المدرسة والصف لتظهر في ملخص النشاط النهائي.</div>'
      + '<div class="teacher-fields">'
      + '<div><label class="field-label" for="teacherInput">اسم المعلم</label>'
      + '<input type="text" id="teacherInput" value="'+esc(S.teacher)+'" placeholder="مثال: محمد العتيبي"></div>'
      + '<div><label class="field-label" for="schoolInput">اسم المدرسة <span class="optional">(اختياري)</span></label>'
      + '<input type="text" id="schoolInput" value="'+esc(S.school)+'" placeholder="مثال: مدرسة الإبداع"></div>'
      + '<div><label class="field-label" for="classInput">اسم الصف <span class="optional">(اختياري)</span></label>'
      + '<input type="text" id="classInput" value="'+esc(S.className)+'" placeholder="مثال: الصف الثاني المتوسط / ب"></div>'
      + '</div>';
    n.innerHTML = '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();
    var ti=$("teacherInput");
    if(ti){ ti.addEventListener("keydown",function(ev){ if(ev.key==="Enter") goNext(); }); setTimeout(function(){ti.focus();},60); }
  }

  else if(step===2){
    var html = '<div class="title">المرحلة الدراسية</div>'
      + '<div class="subtitle">اختر مستوى الأسئلة المناسب لطلابك.</div><div class="cards">';
    Object.keys(STAGES).forEach(function(k){
      html += '<button type="button" class="choice'+(S.stage===k?" selected":"")+'" data-stage="'+k+'">'
            + '<b>'+STAGES[k]+'</b><small>'+STAGE_HINT[k]+'</small></button>';
    });
    c.innerHTML = html + '</div>';
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>'
                + '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();
    // اختيار المرحلة — تحديث موضعي بلا إعادة بناء
    c.querySelectorAll("[data-stage]").forEach(function(b){
      b.addEventListener("click", function(){
        S.stage = this.getAttribute("data-stage");
        c.querySelectorAll("[data-stage]").forEach(function(x){ x.classList.remove("selected"); });
        this.classList.add("selected");
        err("");
      });
    });
  }

  else if(step===3){
    var h = '<div class="title">مجالات الأسئلة</div>'
      + '<div class="subtitle">اختر أربعة مجالات على الأقل.</div>'
      + '<div class="category-toolbar"><span class="count-line" style="margin:0">يمكنك اختيار المجالات يدويًا أو تحديدها كلها.</span>'
      + '<button id="selectAllCats" class="select-all-btn" type="button">اختيار الكل</button></div>'
      + '<div class="category-grid">';
    CATS.forEach(function(x,i){
      h += '<button type="button" class="cat-choice'+(S.categories.indexOf(x)>=0?" selected":"")
         + '" data-cat="'+i+'">'+x+'</button>';
    });
    c.innerHTML = h + '</div><div class="count-line">المحدد: <b id="catCount">'+S.categories.length+'</b> من 4 مطلوبة</div>';
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>'
                + '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();
    c.querySelectorAll("[data-cat]").forEach(function(b){
      b.addEventListener("click", function(){
        var name = CATS[Number(this.getAttribute("data-cat"))];
        var i = S.categories.indexOf(name);
        if(i>=0){ S.categories.splice(i,1); this.classList.remove("selected"); }
        else { S.categories.push(name); this.classList.add("selected"); }
        var cc=$("catCount"); if(cc) cc.textContent = S.categories.length;
        err("");
      });
    });
    var allBtn=$("selectAllCats");
    function updateAllButton(){
      if(!allBtn) return;
      allBtn.textContent = S.categories.length===CATS.length ? "إلغاء اختيار الكل" : "اختيار الكل";
    }
    updateAllButton();
    if(allBtn) allBtn.addEventListener("click",function(){
      if(S.categories.length===CATS.length){
        S.categories=[];
        c.querySelectorAll("[data-cat]").forEach(function(x){ x.classList.remove("selected"); });
      }else{
        S.categories=CATS.slice();
        c.querySelectorAll("[data-cat]").forEach(function(x){ x.classList.add("selected"); });
      }
      var cc=$("catCount"); if(cc) cc.textContent=S.categories.length;
      updateAllButton();
      err("");
    });
    c.querySelectorAll("[data-cat]").forEach(function(b){
      b.addEventListener("click", updateAllButton);
    });
  }

  else if(step===4){
    c.innerHTML = '<div class="title">الفرق والألوان</div>'
      + '<div class="subtitle">اختر عدد الفرق واسم كل فريق ولونه. لا يمكن تكرار اللون.</div>'
      + '<div class="pills" id="countPills"></div>'
      + '<div class="team-config" id="teamConfig"></div>';
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>'
                + '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();
    drawCountPills();
    drawTeamConfig();
  }

  else if(step===5){
    var m = maxRounds();
    if(S.rounds > m) S.rounds = m;
    var r = '<div class="title">الجولات والوقت</div>'
      + '<div class="subtitle">كل جولة تمنح سؤالًا واحدًا لكل فريق. الحروف المتاحة: '
      + availableLetters().length + ' حرفًا.</div>'
      + '<b>عدد الجولات لكل فريق</b><div class="pills" id="roundPills" style="margin:10px 0 20px"></div>'
      + '<b>وقت السؤال</b><div class="pills" id="timePills" style="margin-top:10px"></div>';
    c.innerHTML = r;
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>'
                + '<button id="nextW" class="btn btn-primary" type="button">التالي</button>';
    bindNav();

    var rp=$("roundPills"), rh="";
    for(var i=1;i<=m;i++) rh += '<button type="button" class="pill'+(S.rounds===i?" selected":"")+'" data-rounds="'+i+'">'+i+'</button>';
    rp.innerHTML = rh;
    rp.querySelectorAll("[data-rounds]").forEach(function(b){
      b.addEventListener("click", function(){
        S.rounds = Number(this.getAttribute("data-rounds"));
        rp.querySelectorAll(".pill").forEach(function(x){ x.classList.remove("selected"); });
        this.classList.add("selected");
      });
    });

    var tp=$("timePills"), opts=[[0,"بدون مؤقت"],[15,"15 ث"],[20,"20 ث"],[30,"30 ث"],[45,"45 ث"],[60,"60 ث"]], th="";
    opts.forEach(function(o){ th += '<button type="button" class="pill'+(S.time===o[0]?" selected":"")+'" data-time="'+o[0]+'">'+o[1]+'</button>'; });
    tp.innerHTML = th;
    tp.querySelectorAll("[data-time]").forEach(function(b){
      b.addEventListener("click", function(){
        S.time = Number(this.getAttribute("data-time"));
        tp.querySelectorAll(".pill").forEach(function(x){ x.classList.remove("selected"); });
        this.classList.add("selected");
      });
    });
  }

  else if(step===6){
    var teamChips = "";
    for(var i=0;i<S.teamCount;i++)
      teamChips += '<span style="display:inline-block;padding:3px 10px;border-radius:16px;margin:2px;font-size:12px;color:#fff;background:'+PALETTE[S.colors[i]]+'">'+esc(S.names[i])+'</span>';
    c.innerHTML = '<div class="title">ملخص النشاط</div>'
      + '<div class="subtitle">راجع الإعدادات ثم ابدأ.</div>'
      + '<div class="summary">'
      + '<div class="summary-row"><span>المعلم</span><b>أ. '+esc(S.teacher)+'</b></div>'
      + (S.school ? '<div class="summary-row"><span>المدرسة</span><b>'+esc(S.school)+'</b></div>' : '')
      + (S.className ? '<div class="summary-row"><span>الصف</span><b>'+esc(S.className)+'</b></div>' : '')
      + '<div class="summary-row"><span>المرحلة</span><b>'+STAGES[S.stage]+'</b></div>'
      + '<div class="summary-row"><span>المجالات</span><b>'+S.categories.length+' مجالات</b></div>'
      + '<div class="summary-row"><span>الفرق</span><b>'+teamChips+'</b></div>'
      + '<div class="summary-row"><span>الجولات</span><b>'+S.rounds+' لكل فريق</b></div>'
      + '<div class="summary-row"><span>إجمالي الأسئلة</span><b>'+(S.rounds*S.teamCount)+' سؤال</b></div>'
      + '<div class="summary-row"><span>وقت السؤال</span><b>'+(S.time?S.time+" ثانية":"بدون مؤقت")+'</b></div>'
      + '<div class="summary-row"><span>الأسئلة المتاحة</span><b>'+pool().length+' سؤال</b></div>'
      + '</div><button id="start" class="btn btn-start" type="button">ابدأ تحدي الحروف</button>';
    n.innerHTML = '<button id="backW" class="btn btn-secondary" type="button">رجوع</button>';
    bindNav();
    $("start").addEventListener("click", startGame);
  }
}

function drawCountPills(){
  var box=$("countPills"), h="";
  [2,3,4].forEach(function(x){ h += '<button type="button" class="pill'+(S.teamCount===x?" selected":"")+'" data-count="'+x+'">'+x+' فرق</button>'; });
  box.innerHTML = h;
  box.querySelectorAll("[data-count]").forEach(function(b){
    b.addEventListener("click", function(){
      saveNames();
      var next = Number(this.getAttribute("data-count"));
      for(var j=S.teamCount;j<next;j++){
        if(!S.names[j]) S.names[j]=DEFAULTS[j];
        var cand=0;
        while(S.colors.slice(0,j).indexOf(cand)>=0) cand++;
        S.colors[j]=cand;
      }
      S.teamCount = next;
      box.querySelectorAll(".pill").forEach(function(x){ x.classList.remove("selected"); });
      this.classList.add("selected");
      drawTeamConfig();          /* تحديث القسم فقط — لا إعادة بناء كاملة */
    });
  });
}

function saveNames(){
  for(var i=0;i<S.teamCount;i++){
    var inp=$("name"+i);
    if(inp) S.names[i] = inp.value.trim() || DEFAULTS[i];
  }
}

function drawTeamConfig(){
  var box=$("teamConfig");
  if(!box) return;
  var h="";
  for(var i=0;i<S.teamCount;i++){
    h += '<div class="team-config-row"><div class="team-input">'
       + '<div class="badge" style="background:'+LIGHTS[S.colors[i]]+';color:'+PALETTE[S.colors[i]]+'">'+ICONS[i]+'</div>'
       + '<input type="text" id="name'+i+'" value="'+esc(S.names[i])+'" maxlength="18"></div><div class="palette">';
    for(var k=0;k<PALETTE.length;k++){
      var taken = S.colors.slice(0,S.teamCount).indexOf(k)>=0 && S.colors[i]!==k;
      h += '<button type="button" class="swatch'+(S.colors[i]===k?" selected":"")+'" data-team="'+i+'" data-color="'+k+'"'
         + (taken?" disabled":"") + ' style="background:'+PALETTE[k]+'"></button>';
    }
    h += '</div></div>';
  }
  box.innerHTML = h;

  box.querySelectorAll("[data-color]").forEach(function(b){
    b.addEventListener("click", function(){
      var ti=Number(this.getAttribute("data-team"));
      var ci=Number(this.getAttribute("data-color"));
      if(S.colors.slice(0,S.teamCount).indexOf(ci)>=0 && S.colors[ti]!==ci) return;
      saveNames();                /* حفظ الأسماء قبل إعادة رسم القسم */
      S.colors[ti]=ci;
      drawTeamConfig();           /* إعادة رسم القسم فقط */
    });
  });
}

function bindNav(){
  var nx=$("nextW"), bk=$("backW");
  if(nx) nx.addEventListener("click", goNext);
  if(bk) bk.addEventListener("click", function(){ if(step>1){ step--; render(); } });
}

function goNext(){
  if(step===1){
    var v=$("teacherInput") ? $("teacherInput").value.trim() : "";
    if(!v){ err("الرجاء إدخال اسم المعلم"); return; }
    S.teacher=v;
    S.school=$("schoolInput") ? $("schoolInput").value.trim() : "";
    S.className=$("classInput") ? $("classInput").value.trim() : "";
  }
  if(step===2 && !S.stage){ err("الرجاء اختيار المرحلة الدراسية"); return; }
  if(step===3 && S.categories.length<4){ err("اختر أربعة مجالات على الأقل (المحدد: "+S.categories.length+")"); return; }
  if(step===4){
    saveNames();
    if(availableLetters().length < S.teamCount){ err("الحروف المتاحة غير كافية، اختر مجالات أكثر"); return; }
  }
  if(step<6){ step++; render(); }
}

/* ================= اللعب ================= */
function startGame(){
  teams=[];
  for(var i=0;i<S.teamCount;i++){
    teams.push({ name:S.names[i], score:0, color:PALETTE[S.colors[i]], light:LIGHTS[S.colors[i]], icon:ICONS[i] });
  }
  team=0; usedLetters={}; usedQ={}; turns=0;
  buildTeams(); updateTurn();
  $("teacher").textContent = "إدارة النشاط: أ. " + S.teacher;
  $("liveTime").value = S.time;
  show("game"); showBoard(); roundInfo();
}

function buildTeams(){
  $("teams").innerHTML = teams.map(function(t,i){
    return '<div id="team'+i+'" class="team-card" style="background:'+t.light+';color:'+t.color+'">'
      + '<div class="team-line"><b>'+t.icon+' '+esc(t.name)+'</b></div>'
      + '<div id="score'+i+'" class="team-score">0</div></div>';
  }).join("");
}
function updateTurn(){
  $("turn").textContent = teams[team].icon + " الدور على: " + teams[team].name;
  teams.forEach(function(_,i){ $("team"+i).classList.toggle("current", i===team); });
}
function roundInfo(){
  var r = Math.min(S.rounds, Math.floor(turns/S.teamCount)+1);
  $("roundInfo").textContent = "الجولة "+r+" من "+S.rounds+" — السؤال "+(turns+1)+" من "+(S.rounds*S.teamCount);
}
function eligible(){
  var s={};
  pool().forEach(function(q){ if(!usedLetters[q.letter] && !usedQ[q.id]) s[q.letter]=1; });
  return s;
}
function buildBoard(){
  var e = eligible();
  $("board").innerHTML = LETTERS.map(function(l){
    return '<button type="button" class="letter" data-l="'+l+'"'+(!e[l]?" disabled":"")+'>'+l+'</button>';
  }).join("");
  $("board").querySelectorAll(".letter").forEach(function(b){
    b.addEventListener("click", function(){ choose(this.getAttribute("data-l")); });
  });
  paint(); progress();
}
function choose(l){
  if(phase!=="board" || usedLetters[l]) return;
  var p = pool().filter(function(q){ return q.letter===l && !usedQ[q.id]; });
  var recent = getRecent();
  var fresh = p.filter(function(q){ return recent.indexOf(q.id)<0; });
  var list = fresh.length ? fresh : p;
  if(!list.length) return;

  currentLetter = l;
  currentQ = list[Math.floor(Math.random()*list.length)];
  usedQ[currentQ.id]=1; saveRecent(currentQ.id);
  phase = "question";

  $("boardBox").classList.add("hidden");
  $("questionBox").classList.add("show");
  renderCurrentQuestion();
}

function renderCurrentQuestion(){
  $("bigLetter").textContent = currentLetter;
  $("cat").textContent = currentQ.category + " · " + STAGES[currentQ.stage];

  var qi=$("questionImage"), qiw=$("questionImageWrap");
  if(currentQ.image){
    qi.src=currentQ.image;
    qi.alt=currentQ.imageAlt || "صورة السؤال";
    qiw.classList.add("show");
  }else{
    qi.removeAttribute("src");
    qiw.classList.remove("show");
  }

  $("q").textContent = currentQ.question;
  $("answer").textContent = "الإجابة: " + currentQ.answer;
  $("answer").classList.remove("show");
  $("reveal").textContent = "إظهار الإجابة";
  $("reveal").classList.remove("hidden");
  $("changeQuestion").classList.remove("hidden");
  $("correct").classList.add("hidden");
  $("wrong").classList.add("hidden");
  $("changeQuestion").classList.add("hidden");
  $("msg").className = "result-message";
  $("msg").textContent = "";
  $("next").classList.add("hidden");
  applyTimer();
}

function changeQuestion(){
  if(phase!=="question" && phase!=="timeup") return;

  stopTimer();

  var alternatives = pool().filter(function(q){
    return q.letter===currentLetter && !usedQ[q.id];
  });

  if(!alternatives.length){
    phase="board";
    $("questionBox").classList.remove("show");
    $("boardBox").classList.remove("hidden");
    $("questionImageWrap").classList.remove("show");
    $("questionImage").removeAttribute("src");
    $("changeQuestion").classList.add("hidden");
    $("reveal").classList.remove("hidden");
    $("correct").classList.add("hidden");
    $("wrong").classList.add("hidden");
    $("next").classList.add("hidden");
    $("msg").className="result-message";
    $("answer").classList.remove("show");
    buildBoard();
    alert("لا يوجد سؤال بديل متاح لهذا الحرف، اختر حرفًا آخر.");
    return;
  }

  var recent = getRecent();
  var fresh = alternatives.filter(function(q){
    return recent.indexOf(q.id)<0;
  });
  var list = fresh.length ? fresh : alternatives;

  currentQ = list[Math.floor(Math.random()*list.length)];
  usedQ[currentQ.id]=1;
  saveRecent(currentQ.id);
  phase="question";
  renderCurrentQuestion();
}

function reveal(){
  if(phase!=="question" && phase!=="timeup") return;
  stopTimer(); phase="revealed";
  $("answer").classList.add("show");
  $("reveal").classList.add("hidden");
  $("changeQuestion").classList.add("hidden");
  $("correct").classList.remove("hidden");
  $("wrong").classList.remove("hidden");
  tone([440,660,880],"sine",.1);
}
function evaluate(ok){
  if(phase!=="revealed") return;
  phase="done";
  usedLetters[currentLetter] = { ok:ok, color: ok ? teams[team].color : "#9AA4AE" };
  if(ok){
    teams[team].score++;
    $("score"+team).textContent = teams[team].score;
    tone([523,659,784,1047],"triangle",.15);
    confetti();
  } else {
    tone([260,220,180],"sine",.13);
  }
  $("correct").classList.add("hidden");
  $("wrong").classList.add("hidden");
  $("msg").textContent = ok ? "إجابة صحيحة! تلوّن الحرف بلون الفريق." : "إجابة خاطئة، أُغلق الحرف بالرمادي.";
  $("msg").className = "result-message show " + (ok?"good":"bad");
  $("next").classList.remove("hidden");
  turns++; progress(); roundInfo();
}
function nextTurn(){
  if(phase!=="done") return;
  if(turns >= S.rounds*S.teamCount){ finish(); return; }
  team = (team+1) % teams.length;
  updateTurn(); showBoard();
}
function showBoard(){
  phase="board"; stopTimer();
  $("questionBox").classList.remove("show");
  $("boardBox").classList.remove("hidden");
  $("reveal").classList.remove("hidden");
  $("changeQuestion").classList.add("hidden");
  $("correct").classList.add("hidden");
  $("wrong").classList.add("hidden");
  $("next").classList.add("hidden");
  $("msg").className="result-message";
  $("answer").classList.remove("show");
  $("questionImageWrap").classList.remove("show");
  $("questionImage").removeAttribute("src");
  buildBoard();
}
function paint(){
  Object.keys(usedLetters).forEach(function(l){
    var b = document.querySelector('[data-l="'+l+'"]');
    if(!b) return;
    b.disabled = true;
    if(usedLetters[l].ok){
      b.style.background = usedLetters[l].color;
      b.style.borderColor = usedLetters[l].color;
      b.style.color = "#fff";
    } else b.classList.add("closed");
  });
}
function progress(){ $("progress").textContent = turns + " من " + (S.rounds*S.teamCount) + " أسئلة"; }

/* ================= المؤقت ================= */
function applyTimer(){
  if(S.time){ $("timer").classList.remove("hidden"); startTimer(S.time); }
  else { $("timer").classList.add("hidden"); stopTimer(); }
}
function startTimer(s){
  stopTimer(); tv=s; paused=false;
  $("pause").textContent="إيقاف المؤقت";
  updateTimer();
  tid = setInterval(function(){
    if(paused) return;
    tv--; updateTimer();
    if(tv<=0){
      stopTimer(); phase="timeup";
      tone([720,520,360],"square",.09);
      $("reveal").textContent = "انتهى الوقت — إظهار الإجابة";
      $("reveal").classList.remove("hidden");
    }
  },1000);
}
function stopTimer(){ if(tid){ clearInterval(tid); tid=null; } }
function updateTimer(){
  var p = Math.max(0, tv/(S.time||1)*100);
  $("fill").style.width = p+"%";
  $("fill").className = "timer-fill " + (tv<=5?"danger":tv<=10?"warn":"");
  $("timeNum").textContent = tv + " ث";
}
function changeTime(){
  S.time = Number($("liveTime").value);
  if(phase==="question" || phase==="timeup"){
    if(S.time===0){ $("timer").classList.add("hidden"); stopTimer(); phase="question"; }
    else { $("timer").classList.remove("hidden"); phase="question"; startTimer(S.time); }
  }
}

/* ================= التخزين ================= */
function getRecent(){ try{ return JSON.parse(localStorage.getItem("letters_recent_"+S.stage)||"[]"); }catch(e){ return []; } }
function saveRecent(id){
  try{
    var a = getRecent().filter(function(x){ return x!==id; });
    a.push(id);
    localStorage.setItem("letters_recent_"+S.stage, JSON.stringify(a.slice(-100)));
  }catch(e){}
}

/* ================= النهاية ================= */
function finish(){
  stopTimer();
  $("resultTeacher").textContent = "الأستاذ " + S.teacher;
  var meta=[];
  if(S.school) meta.push('<div class="final-meta-card"><span>المدرسة</span><b>'+esc(S.school)+'</b></div>');
  if(S.className) meta.push('<div class="final-meta-card"><span>الصف</span><b>'+esc(S.className)+'</b></div>');
  meta.push('<div class="final-meta-card"><span>المرحلة</span><b>'+esc(STAGES[S.stage]||"—")+'</b></div>');
  meta.push('<div class="final-meta-card"><span>المجالات</span><b>'+S.categories.length+' مجالات</b></div>');
  meta.push('<div class="final-meta-card"><span>الأسئلة المنفذة</span><b>'+turns+' سؤالًا</b></div>');
  $("finalMeta").innerHTML=meta.join("");
  var s = teams.slice().sort(function(a,b){ return b.score-a.score; });
  var m = s[0].score;
  var w = s.filter(function(x){ return x.score===m; });
  $("winner").textContent = w.length>1
    ? "تعادل بين: " + w.map(function(x){ return x.name; }).join(" و ")
    : "الفائز: " + w[0].name;
  var medals = ["🥇","🥈","🥉","🏅"];
  $("rows").innerHTML = s.map(function(t,i){
    return '<div class="result-row'+(i===0?" first":"")+'"><b>'+medals[i]+'</b>'
      + '<b style="color:'+t.color+'">'+t.icon+' '+esc(t.name)+'</b>'
      + '<b>'+t.score+' نقطة</b></div>';
  }).join("");
  show("results"); confetti();
}
function resetHome(){
  stopTimer(); step=1;
  S.stage=""; S.categories=[]; S.teacher=""; S.school=""; S.className="";
  S.teamCount=2; S.names=DEFAULTS.slice(); S.colors=[0,1,2,3];
  S.rounds=5; S.time=30;
  show("wizard"); render();
}

/* ================= الصوت والقصاصات ================= */
function audio(){
  if(!ac){
    var A = window.AudioContext || window.webkitAudioContext;
    if(!A) return null;
    try{ ac = new A(); }catch(e){ return null; }
  }
  if(ac.state==="suspended") ac.resume();
  return ac;
}
function tone(ns,type,g){
  if(!sound) return;
  var a = audio(); if(!a) return;
  try{
    var now = a.currentTime;
    ns.forEach(function(f,i){
      var o=a.createOscillator(), v=a.createGain();
      o.type=type; o.frequency.value=f;
      o.connect(v); v.connect(a.destination);
      var t = now + i*0.08;
      v.gain.setValueAtTime(0,t);
      v.gain.linearRampToValueAtTime(g,t+0.02);
      v.gain.exponentialRampToValueAtTime(0.001,t+0.35);
      o.start(t); o.stop(t+0.4);
    });
  }catch(e){}
}
function confetti(){
  var cv=$("confetti"), x=cv.getContext("2d");
  cv.width=innerWidth; cv.height=innerHeight; cv.style.display="block";
  var p=[];
  for(var i=0;i<90;i++) p.push({
    x:Math.random()*cv.width, y:-Math.random()*300,
    v:2+Math.random()*4, c:PALETTE[Math.floor(Math.random()*PALETTE.length)], a:1
  });
  var f=0;
  (function d(){
    x.clearRect(0,0,cv.width,cv.height);
    var alive=false;
    p.forEach(function(q){
      q.y+=q.v; q.x+=Math.sin(q.y*0.03);
      if(f>110) q.a-=0.02;
      if(q.a<=0) return;
      alive=true; x.globalAlpha=q.a; x.fillStyle=q.c;
      x.fillRect(q.x,q.y,7,11);
    });
    f++;
    if(alive) requestAnimationFrame(d); else cv.style.display="none";
  })();
}

/* ================= الأحداث الثابتة ================= */
$("changeQuestion").addEventListener("click", changeQuestion);
$("reveal").addEventListener("click", reveal);
$("correct").addEventListener("click", function(){ evaluate(true); });
$("wrong").addEventListener("click", function(){ evaluate(false); });
$("next").addEventListener("click", nextTurn);
$("pause").addEventListener("click", function(){
  if(!S.time || phase!=="question") return;
  paused = !paused;
  this.textContent = paused ? "استئناف المؤقت" : "إيقاف المؤقت";
});
$("add").addEventListener("click", function(){
  if(!S.time || (phase!=="question" && phase!=="timeup")) return;
  tv += 10;
  if(phase==="timeup"){ phase="question"; $("reveal").textContent="إظهار الإجابة"; startTimer(tv); }
  else updateTimer();
});
$("reset").addEventListener("click", function(){
  if(S.time && (phase==="question" || phase==="timeup")){
    phase="question"; $("reveal").textContent="إظهار الإجابة"; startTimer(S.time);
  }
});
$("liveTime").addEventListener("change", changeTime);
$("end").addEventListener("click", function(){ if(confirm("إنهاء النشاط وعرض النتائج؟")) finish(); });
$("newGame").addEventListener("click", resetHome);
$("homeBtn").addEventListener("click", function(){ if(confirm("العودة للرئيسية؟")) resetHome(); });
$("soundBtn").addEventListener("click", function(){
  sound = !sound;
  this.textContent = sound ? "🔊" : "🔇";
  if(sound) audio();
});

loadQuestionBank();
})();

