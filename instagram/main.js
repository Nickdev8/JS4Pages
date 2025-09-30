const posts = [
  {
    user: "bobDylan",
    avatar: "https://picsum.photos/seed/user/64",
    image: "https://picsum.photos/seed/beach/1080/1080",
    likes: 196,
    caption: "Beutiful New-York sunrise",
    commentsCount: 23,
    timeAgo: "2 u",
    dateLabel: "11 sep 2001",
  },
];

const feed = document.getElementById("feed");
feed.innerHTML = "";

posts.forEach(p => {
  const article = document.createElement("article");
  article.className = "post";

  /* ---------- HEAD ---------- */
  const head = document.createElement("div");
  head.className = "post-head";

  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src = p.avatar;
  avatar.alt = "Avatar";

  const who = document.createElement("div");
  who.className = "who";

  const strongUser = document.createElement("strong");
  strongUser.textContent = p.user;

  const meta = document.createElement("span");
  meta.className = "meta";
  meta.textContent = `• ${p.timeAgo}`;

  who.append(strongUser, meta);

  const more = document.createElement("button");
  more.className = "more";
  more.setAttribute("aria-label", "Meer");
  more.textContent = "⋯";

  head.append(avatar, who, more);

  /* ---------- MEDIA ---------- */
  const media = document.createElement("div");
  media.className = "post-media";
  const img = document.createElement("img");
  img.src = p.image;
  img.alt = "Post afbeelding";
  media.appendChild(img);

  /* ---------- ACTIONS ---------- */
  const actions = document.createElement("div");
  actions.className = "post-actions";

  const left = document.createElement("div");
  left.className = "left";

  const btnLike = document.createElement("button");
  btnLike.setAttribute("aria-label", "Like");
  btnLike.textContent = "<3";

  const btnComment = document.createElement("button");
  btnComment.setAttribute("aria-label", "Reageren");
  btnComment.textContent = "(・∀・)";

  const btnShare = document.createElement("button");
  btnShare.setAttribute("aria-label", "Delen");
  btnShare.textContent = "->";

  left.append(btnLike, btnComment, btnShare);

  const btnSave = document.createElement("button");
  btnSave.className = "save";
  btnSave.setAttribute("aria-label", "Opslaan");
  btnSave.textContent = "[ ]";

  actions.append(left, btnSave);

  /* ---------- BODY ---------- */
  const body = document.createElement("div");
  body.className = "post-body";

  const likes = document.createElement("div");
  likes.className = "likes";
  likes.innerHTML = `<strong>${p.likes}</strong> vind-ik-leuks`;

  const caption = document.createElement("p");
  caption.className = "caption";
  caption.innerHTML = `<strong>${p.user}</strong> ${p.caption}`;

  const viewComments = document.createElement("button");
  viewComments.className = "view-comments";
  viewComments.textContent = `Bekijk alle ${p.commentsCount} reacties`;

  const date = document.createElement("div");
  date.className = "date";
  date.textContent = p.dateLabel;

  body.append(likes, caption, viewComments, date);

  article.append(head, media, actions, body);
  feed.appendChild(article);

  /* ---------- Button logic ---------- */
  let liked = false;
  btnLike.addEventListener("click", () => {
    liked = !liked;
    btnLike.style.fontWeight = liked ? "bold" : "normal";
  });

  let saved = false;
  btnSave.addEventListener("click", () => {
    saved = !saved;
    btnSave.textContent = saved ? "[X]" : "[ ]";
  });
});
