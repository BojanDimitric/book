class Text {
    constructor(id, type, text, comments) {
        this.id = id;
        this.type = type;
        this.text = text;
        this.comments = comments;
    }
}

class Image {
    constructor(id, type, image, comments) {
        this.id = id;
        this.type = type;
        this.image = image;
        this.comments = comments;
    }
}

class Video {
    constructor(id, type, video, comments) {
        this.id = id;
        this.type = type;
        this.video = video;
        this.comments = comments;
    }
}

class User {
    constructor(id, name, about, date, avatar) {
        this.id = id;
        this.name = name;
        this.about = about;
        this.date = date;
        this.avatar = avatar;
    }
}

class Profile {
    constructor(id, name, email, short, about, avatar, posts, comments) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.short = short;
        this.about = about;
        this.avatar = avatar;
        this.posts = posts;
        this.comments = comments;
    }
}

export {
    Text,
    Image,
    Video,
    User,
    Profile
};

