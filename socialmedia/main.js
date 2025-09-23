// DATA (placeholder)
const posts = [
    {
        user: "bobDylan",
        avatar: "https://picsum.photos/seed/user/64",
        image: "https://picsum.photos/seed/beach/1080/1080",
        likes: 196,
        caption:
            "Beutiful New-York sunrise",
        commentsCount: 23,
        timeAgo: "2 u",
        dateLabel: "11 sep 2001",
    },
];

// ROOT
const feed = document.getElementById("feed");

// OOP component
class IGPost {
    constructor(data) {
        this.data = data;
    }

    render() {
        // <article class="post">
        const article = document.createElement("article");
        article.className = "post";

        // ----- header -----
        const head = document.createElement("div");
        head.className = "post-head";

        const avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.src = this.data.avatar;
        avatar.alt = "Avatar";

        const who = document.createElement("div");
        who.className = "who";

        const strongUser = document.createElement("strong");
        strongUser.textContent = this.data.user;

        const meta = document.createElement("span");
        meta.className = "meta";
        meta.textContent = `• ${this.data.timeAgo}`;

        who.appendChild(strongUser);
        who.appendChild(meta);

        const more = document.createElement("button");
        more.className = "more";
        more.setAttribute("aria-label", "Meer");
        more.textContent = "⋯";

        head.appendChild(avatar);
        head.appendChild(who);
        head.appendChild(more);

        // ----- media -----
        const media = document.createElement("div");
        media.className = "post-media";

        const img = document.createElement("img");
        img.src = this.data.image;
        img.alt = "Post afbeelding";

        media.appendChild(img);

        // ----- actions -----
        const actions = document.createElement("div");
        actions.className = "post-actions";

        const left = document.createElement("div");
        left.className = "left";

        // ❤️ Like button
        const btnLike = document.createElement("button");
        btnLike.setAttribute("aria-label", "Like");
        btnLike.textContent = "<3";
        let liked = false;
        btnLike.addEventListener("click", () => {
        liked = !liked;
        btnLike.style.fontWeight = liked ? "bold" : "normal";
        });

        // 🗂 Save button
        const btnSave = document.createElement("button");
        btnSave.className = "save";
        btnSave.setAttribute("aria-label", "Opslaan");
        btnSave.textContent = "[ ]";
        let saved = false;
        btnSave.addEventListener("click", () => {
        saved = !saved;
        btnSave.textContent = saved ? "[X]" : "[ ]";
        });

        // other buttons (no extra UI)
        const btnComment = document.createElement("button");
        btnComment.setAttribute("aria-label", "Reageren");
        btnComment.textContent = "(・∀・)";

        const btnShare = document.createElement("button");
        btnShare.setAttribute("aria-label", "Delen");
        btnShare.textContent = "->";

        left.appendChild(btnLike);
        left.appendChild(btnComment);
        left.appendChild(btnShare);

        actions.appendChild(left);
        actions.appendChild(btnSave);

        // ----- body -----
        const body = document.createElement("div");
        body.className = "post-body";

        const likes = document.createElement("div");
        likes.className = "likes";
        likes.innerHTML = `<strong>${this.data.likes}</strong> vind-ik-leuks`;

        const caption = document.createElement("p");
        caption.className = "caption";
        caption.innerHTML = `<strong>${this.data.user}</strong> ${this.data.caption}`;

        const viewComments = document.createElement("button");
        viewComments.className = "view-comments";
        viewComments.textContent = `Bekijk alle ${this.data.commentsCount} reacties`;

        const date = document.createElement("div");
        date.className = "date";
        date.textContent = this.data.dateLabel;

        body.appendChild(likes);
        body.appendChild(caption);
        body.appendChild(viewComments);
        body.appendChild(date);

        // ----- mount -----
        article.appendChild(head);
        article.appendChild(media);
        article.appendChild(actions);
        article.appendChild(body);

        return article;
    }
}

// render alle posts
feed.innerHTML = "";
posts.forEach((p) => feed.appendChild(new IGPost(p).render()));
