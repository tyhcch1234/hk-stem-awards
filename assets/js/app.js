(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const state = { level: "全部", domain: "全部", year: "全部" };

  const LEVELS = ["全部", "小學", "中學"];
  const YEARS = ["全部", "2026", "2025", "2024"];

  const shortAward = (award) => {
    if (award.includes("全場總冠軍")) return "全場總冠軍";
    if (award.includes("冠軍")) return "冠軍";
    if (award.includes("金獎")) return "金獎";
    if (award.includes("銀獎")) return "銀獎";
    if (award.includes("銅獎")) return "銅獎";
    return "得獎";
  };

  /* ---------- filters ---------- */
  function chip(label, active, onClick) {
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = label;
    b.setAttribute("aria-pressed", String(active));
    b.addEventListener("click", onClick);
    return b;
  }

  function buildFilters() {
    const domains = ["全部", ...new Set(PROJECTS.map((p) => p.domain))];

    const lv = $("#filterLevel");
    LEVELS.forEach((l) =>
      lv.appendChild(
        chip(l, state.level === l, () => {
          state.level = l;
          sync();
        })
      )
    );

    const dm = $("#filterDomain");
    domains.forEach((d) =>
      dm.appendChild(
        chip(d, state.domain === d, () => {
          state.domain = d;
          sync();
        })
      )
    );

    const yr = $("#filterYear");
    YEARS.forEach((y) =>
      yr.appendChild(
        chip(y, state.year === y, () => {
          state.year = y;
          sync();
        })
      )
    );
  }

  function sync() {
    $$("#filterLevel .chip").forEach((c, i) =>
      c.setAttribute("aria-pressed", String(LEVELS[i] === state.level))
    );
    const domains = ["全部", ...new Set(PROJECTS.map((p) => p.domain))];
    $$("#filterDomain .chip").forEach((c, i) =>
      c.setAttribute("aria-pressed", String(domains[i] === state.domain))
    );
    $$("#filterYear .chip").forEach((c, i) =>
      c.setAttribute("aria-pressed", String(YEARS[i] === state.year))
    );
    render();
  }

  /* ---------- cards ---------- */
  function card(p) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "card reveal";
    el.setAttribute("aria-haspopup", "dialog");
    el.innerHTML = `
      <div class="card-media">
        <span class="card-no">${p.no}</span>
        <span class="card-badge">${shortAward(p.award)}</span>
        <img src="${p.img}" alt="${p.title}（AI 概念示意圖）" loading="lazy" width="1200" height="800">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${p.school}</span><i class="dot"></i><span>${p.level}</span><i class="dot"></i><span>${p.year}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.tagline}</p>
        <div class="card-tags">
          <span class="tag">${p.domain}</span>
          <span class="tag">${p.competition}</span>
        </div>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>`;
    el.addEventListener("click", () => openDetail(p));
    return el;
  }

  function render() {
    const grid = $("#grid");
    const list = PROJECTS.filter(
      (p) =>
        (state.level === "全部" || p.level === state.level) &&
        (state.domain === "全部" || p.domain === state.domain) &&
        (state.year === "全部" || p.year === state.year)
    );

    grid.innerHTML = "";
    if (!list.length) {
      grid.innerHTML = `<div class="empty">沒有符合條件的作品，試試放寬篩選。</div>`;
    } else {
      list.forEach((p) => grid.appendChild(card(p)));
    }

    $("#resultCount").textContent = `${list.length} 件作品`;
    observeReveals();
  }

  /* ---------- detail ---------- */
  const dlg = $("#detail");

  function openDetail(p) {
    $("#dlgScroll").innerHTML = `
      <div class="dlg-hero"><img src="${p.img}" alt="${p.title}（AI 概念示意圖）"></div>
      <div class="dlg-head">
        <div class="dlg-award">✦ ${p.award}</div>
        <h3 id="dlgTitle">${p.title}</h3>
        <div class="dlg-sub">
          <span>${p.school}</span><span>${p.level}組</span><span>${p.year}</span><span>${p.domain}</span>
        </div>
      </div>
      <div class="dlg-body">
        <p class="dlg-tagline">${p.tagline}</p>
        <div class="dlg-sections">
          <div class="dsec"><h4><b>01</b> 理念</h4><p>${p.concept}</p></div>
          <div class="dsec"><h4><b>02</b> 創新之處</h4><p>${p.innovation}</p></div>
          <div class="dsec"><h4><b>03</b> 獨特之處</h4><p>${p.unique}</p></div>
          <div class="dsec"><h4><b>04</b> 關鍵技術</h4><div class="dlg-tech">${p.tech
            .map((t) => `<span>${t}</span>`)
            .join("")}</div></div>
          <div class="dsec"><h4><b>05</b> 為什麼重要</h4><p>${p.impact}</p></div>
        </div>
        <div class="dlg-foot">
          <div class="dlg-box">
            <h5>比賽與獎項</h5>
            <p>${p.competition}（${p.year}）<br>${p.award}</p>
          </div>
          <div class="dlg-box">
            <h5>資料來源</h5>
            <p><a href="${p.source.url}" target="_blank" rel="noopener">${p.source.label} ↗</a></p>
          </div>
        </div>
        <p class="dlg-note">圖片為按研究主題生成的 AI 概念示意圖，並非實際作品照片。獎項、學校與技術描述按上方來源核實；「獨特之處」為據公開資料之分析。</p>
      </div>`;

    dlg.showModal();
    document.body.classList.add("no-scroll");
    $("#dlgScroll").scrollTop = 0;
    $("#dlgClose").focus({ preventScroll: true });
  }

  function closeDetail() {
    dlg.close();
    document.body.classList.remove("no-scroll");
  }

  $("#dlgClose").addEventListener("click", closeDetail);
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) closeDetail();
  });
  dlg.addEventListener("close", () => document.body.classList.remove("no-scroll"));

  /* ---------- competitions ---------- */
  function renderComps() {
    const wrap = $("#compList");
    COMPETITIONS.forEach((c) => {
      const a = document.createElement("a");
      a.className = "comp reveal";
      a.href = c.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `
        <div>
          <h3>${c.name}</h3>
          <div class="org">${c.org}</div>
        </div>
        <div>
          <p class="scale">${c.scale}</p>
          <p class="scale" style="color:var(--dim);margin-top:6px">${c.note}</p>
        </div>
        <span class="lvl">${c.level}</span>`;
      wrap.appendChild(a);
    });
  }

  /* ---------- nav / reveal / counters ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
    }
    $$(".reveal:not(.in)").forEach((el) => io.observe(el));
  }

  function counters() {
    const nodes = $$("[data-count]");
    const run = (el) => {
      const target = +el.dataset.count;
      const dur = 1100;
      const t0 = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) return nodes.forEach(run);
    const co = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target);
            co.unobserve(e.target);
          }
        }),
      { threshold: 0.6 }
    );
    nodes.forEach((n) => co.observe(n));
  }

  const film = $("#openingFilm");

  /* ---------- init ---------- */
  buildFilters();
  render();
  renderComps();
  observeReveals();
  counters();

  // Deep link: #p01 opens that project
  const fromHash = location.hash.match(/^#(p\d{2})$/);
  if (fromHash) {
    const hit = PROJECTS.find((p) => p.id === fromHash[1]);
    if (hit) setTimeout(() => openDetail(hit), 250);
  }

  // Start the opening film a little past the black fade-in
  film.addEventListener("loadedmetadata", () => {
    if (film.currentTime < 1) film.currentTime = 16.4;
  }, { once: true });

  // Reduce motion: stop the opening film from looping if user prefers calm
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    film.removeAttribute("autoplay");
    film.pause();
  }
})();
