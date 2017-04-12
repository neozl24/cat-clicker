var initialCats = [
    {
        clickCount: 0,
        name: 'Eastwood',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        nicknames: ["Prince", "Mr. Williams"]
    },
    {
        clickCount: 0,
        name: 'JoJo',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        nicknames: ["John", "J", "Milk boy"]
    },
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        nicknames: ["T-bag", "Sleeper", "zzzzz"]
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);

    this.nicknames = ko.observableArray(data.nicknames);

    this.age = ko.computed(function() {
        var title;
        var count = this.clickCount();
        if (count < 5) {
            title = 'Newborn';
        } else if (count < 10) {
            title = 'Infant';
        } else if (count < 15) {
            title = 'Child';
        } else if (count < 20) {
            title = 'Teen';
        } else {
            title = 'Adult';
        }
        return title;
    }, this);
};

var ViewModel = function() {
    var self = this;

    self.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    self.currentCat = ko.observable(self.catList()[0]);

    self.incrementCounter = function() {
        // console.log(this);
        // console.log(self);
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    self.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    }
};

ko.applyBindings(new ViewModel());
