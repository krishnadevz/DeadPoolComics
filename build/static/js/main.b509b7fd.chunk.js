(this.webpackJsonpwigo=this.webpackJsonpwigo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),c=a(7),i=a.n(c),s=(a(13),a(1)),l=a(2),n=a(5),m=a(4),p=a(3),u=(a(14),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.comic,t=e.thumbnail,a=e.issueNumber,o=e.pageCount,c=e.dates,i=e.prices;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"comic-thumbnail-container"},r.a.createElement("img",{className:"comicsimg",src:"".concat(t.path,".").concat(t.extension)})),r.a.createElement("div",{className:"comic-data-container"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,"Issue:",a),r.a.createElement("p",null,"Pages:",o),r.a.createElement("p",null,"Date:",new Date(c[0].date).toLocaleString()),r.a.createElement("p",null,"Price: $",i[0].price)))}},{key:"handleClick",value:function(){this.props.onSelect&&this.props.onSelect(this.props.key),this.setState({selected:!this.state.selected})}}]),a}(o.Component)),h=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.result.map((function(t,a){return r.a.createElement(u,{comic:t,key:a,onSelect:e.props.onSelect})})))}}]),a}(o.Component),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={selected:[]},o.handleSelection=o.handleSelection.bind(Object(n.a)(o)),o}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"store-container"},r.a.createElement("h1",null,r.a.createElement("center",null,"All Comics")),r.a.createElement(h,{result:[{id:60602,digitalId:0,title:"Deadpool (2015) #28",issueNumber:28,variantDescription:"",description:"Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up.",modified:"2017-03-02T11:29:55-0500",isbn:"",upc:"75960608332902811",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:32,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up."}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60602",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60602/deadpool_2015_28?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-28/digital-comic/44277?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-03-01T00:00:00-0500"},{type:"focDate",date:"2017-03-01T00:00:00-0500"}],prices:[{type:"printPrice",price:3.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a",extension:"jpg"}],creators:{available:5,collectionURI:"http://gateway.marvel.com/v1/public/comics/60602/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/665",name:"Reilly Brown",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/9394",name:"Salvador Espin",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12974",name:"Vc Joe Sabino",role:"letterer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:5},characters:{available:1,collectionURI:"http://gateway.marvel.com/v1/public/comics/60602/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:1},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60602/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131673",name:"cover from Deadpool (2015) #28",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131674",name:"story from Deadpool (2015) #28",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60602/events",items:[],returned:0}},{id:60601,digitalId:0,title:"Deadpool (2015) #27",issueNumber:27,variantDescription:"",description:"Steve Rogers is Captain America, the bastion of all that is good. He\u2019s the kind of paragon who Deadpool could really take a lesson from. I\u2019m not caught up on his recent comics, but I can\u2019t imagine anything could change that.",modified:"2017-02-10T11:01:40-0500",isbn:"",upc:"75960608332902711",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:32,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"Steve Rogers is Captain America, the bastion of all that is good. He\u2019s the kind of paragon who Deadpool could really take a lesson from. I\u2019m not caught up on his recent comics, but I can\u2019t imagine anything could change that."}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60601",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60601/deadpool_2015_27?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-27/digital-comic/44083?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-02-15T00:00:00-0500"},{type:"focDate",date:"2017-01-25T00:00:00-0500"}],prices:[{type:"printPrice",price:3.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/4/50/589a44b869b73",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/4/50/589a44b869b73",extension:"jpg"}],creators:{available:4,collectionURI:"http://gateway.marvel.com/v1/public/comics/60601/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12298",name:"Scott Hepburn",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12392",name:"David Lopez",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:4},characters:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60601/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009220",name:"Captain America"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:2},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60601/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131671",name:"cover from Deadpool (2015) #27",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131672",name:"story from Deadpool (2015) #27",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60601/events",items:[],returned:0}},{id:60600,digitalId:0,title:"Deadpool (2015) #26",issueNumber:26,variantDescription:"",description:"It\u2019s February, so Love is in the air! So of course, we\u2019re guest-starring the one character no one can kiss! That\u2019s right: Rogue is stopping by for an adventure!",modified:"2017-01-27T18:10:17-0500",isbn:"",upc:"75960608332902611",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:32,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"It\u2019s February, so Love is in the air! So of course, we\u2019re guest-starring the one character no one can kiss! That\u2019s right: Rogue is stopping by for an adventure!"}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60600",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60600/deadpool_2015_26?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-26/digital-comic/44038?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-02-01T00:00:00-0500"},{type:"focDate",date:"2017-01-09T00:00:00-0500"}],prices:[{type:"printPrice",price:3.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/3/c0/588b7090570ec",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/3/c0/588b7090570ec",extension:"jpg"}],creators:{available:4,collectionURI:"http://gateway.marvel.com/v1/public/comics/60600/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12298",name:"Scott Hepburn",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12392",name:"David Lopez",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:4},characters:{available:1,collectionURI:"http://gateway.marvel.com/v1/public/comics/60600/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:1},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60600/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131669",name:"cover from Deadpool (2015) #26",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131670",name:"story from Deadpool (2015) #26",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60600/events",items:[],returned:0}},{id:60599,digitalId:0,title:"Deadpool (2015) #25",issueNumber:25,variantDescription:"",description:"DEADPOOL 2099 reaches its DOUBLE-SIZED CONCLUSION! Wade\u2019s two daughters battle for his legacy! PLUS: The old man himself gets in the game! AND: IRON FIST shows just how IMMORTAL he is!",modified:"2017-01-18T11:46:43-0500",isbn:"",upc:"75960608332902511",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:48,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"DEADPOOL 2099 reaches its DOUBLE-SIZED CONCLUSION! Wade\u2019s two daughters battle for his legacy! PLUS: The old man himself gets in the game! AND: IRON FIST shows just how IMMORTAL he is!"}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60599",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60599/deadpool_2015_25?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-25/digital-comic/43799?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-01-25T00:00:00-0500"},{type:"focDate",date:"2016-12-19T00:00:00-0500"}],prices:[{type:"printPrice",price:5.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/d/90/5878fbfee568a",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/d/90/5878fbfee568a",extension:"jpg"}],creators:{available:3,collectionURI:"http://gateway.marvel.com/v1/public/comics/60599/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/486",name:"Scott Koblish",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:3},characters:{available:1,collectionURI:"http://gateway.marvel.com/v1/public/comics/60599/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:1},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60599/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131667",name:"cover from Deadpool (2015) #25",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131668",name:"story from Deadpool (2015) #25",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60599/events",items:[],returned:0}},{id:60598,digitalId:0,title:"Deadpool (2015) #24",issueNumber:24,variantDescription:"",description:"\u201cPATIENCE: ZERO\u201d comes to an end! Will Wade make a deal with the devil to save a loved one? Surely no Marvel hero would do such a thing!",modified:"2017-01-05T16:54:11-0500",isbn:"",upc:"75960608332902411",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:32,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"\u201cPATIENCE: ZERO\u201d comes to an end! Will Wade make a deal with the devil to save a loved one? Surely no Marvel hero would do such a thing!"}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60598",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60598/deadpool_2015_24?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-24/digital-comic/43794?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-01-11T00:00:00-0500"},{type:"focDate",date:"2016-12-12T00:00:00-0500"}],prices:[{type:"printPrice",price:3.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/3/c0/586eb66144a83",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/3/c0/586eb66144a83",extension:"jpg"}],creators:{available:4,collectionURI:"http://gateway.marvel.com/v1/public/comics/60598/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/9081",name:"Matteo Lolli",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/11930",name:"Tradd Moore",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:4},characters:{available:1,collectionURI:"http://gateway.marvel.com/v1/public/comics/60598/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:1},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60598/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131665",name:"cover from Deadpool (2015) #24",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131666",name:"story from Deadpool (2015) #24",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60598/events",items:[],returned:0}}],onSelect:this.handleSelection})),r.a.createElement("div",{className:"owned-container"},r.a.createElement("h1",null,"My Comics"),r.a.createElement(h,{result:[{id:60602,digitalId:0,title:"Deadpool (2015) #28",issueNumber:28,variantDescription:"",description:"Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up.",modified:"2017-03-02T11:29:55-0500",isbn:"",upc:"75960608332902811",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:32,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up."}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60602",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60602/deadpool_2015_28?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-28/digital-comic/44277?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-03-01T00:00:00-0500"},{type:"focDate",date:"2017-03-01T00:00:00-0500"}],prices:[{type:"printPrice",price:3.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a",extension:"jpg"}],creators:{available:5,collectionURI:"http://gateway.marvel.com/v1/public/comics/60602/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/665",name:"Reilly Brown",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/9394",name:"Salvador Espin",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12974",name:"Vc Joe Sabino",role:"letterer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:5},characters:{available:1,collectionURI:"http://gateway.marvel.com/v1/public/comics/60602/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:1},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60602/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131673",name:"cover from Deadpool (2015) #28",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131674",name:"story from Deadpool (2015) #28",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60602/events",items:[],returned:0}},{id:60601,digitalId:0,title:"Deadpool (2015) #27",issueNumber:27,variantDescription:"",description:"Steve Rogers is Captain America, the bastion of all that is good. He\u2019s the kind of paragon who Deadpool could really take a lesson from. I\u2019m not caught up on his recent comics, but I can\u2019t imagine anything could change that.",modified:"2017-02-10T11:01:40-0500",isbn:"",upc:"75960608332902711",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:32,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"Steve Rogers is Captain America, the bastion of all that is good. He\u2019s the kind of paragon who Deadpool could really take a lesson from. I\u2019m not caught up on his recent comics, but I can\u2019t imagine anything could change that."}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60601",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60601/deadpool_2015_27?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-27/digital-comic/44083?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-02-15T00:00:00-0500"},{type:"focDate",date:"2017-01-25T00:00:00-0500"}],prices:[{type:"printPrice",price:3.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/4/50/589a44b869b73",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/4/50/589a44b869b73",extension:"jpg"}],creators:{available:4,collectionURI:"http://gateway.marvel.com/v1/public/comics/60601/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12298",name:"Scott Hepburn",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12392",name:"David Lopez",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:4},characters:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60601/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009220",name:"Captain America"},{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:2},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60601/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131671",name:"cover from Deadpool (2015) #27",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131672",name:"story from Deadpool (2015) #27",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60601/events",items:[],returned:0}},{id:60600,digitalId:0,title:"Deadpool (2015) #26",issueNumber:26,variantDescription:"",description:"It\u2019s February, so Love is in the air! So of course, we\u2019re guest-starring the one character no one can kiss! That\u2019s right: Rogue is stopping by for an adventure!",modified:"2017-01-27T18:10:17-0500",isbn:"",upc:"75960608332902611",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:32,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"It\u2019s February, so Love is in the air! So of course, we\u2019re guest-starring the one character no one can kiss! That\u2019s right: Rogue is stopping by for an adventure!"}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60600",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60600/deadpool_2015_26?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-26/digital-comic/44038?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-02-01T00:00:00-0500"},{type:"focDate",date:"2017-01-09T00:00:00-0500"}],prices:[{type:"printPrice",price:3.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/3/c0/588b7090570ec",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/3/c0/588b7090570ec",extension:"jpg"}],creators:{available:4,collectionURI:"http://gateway.marvel.com/v1/public/comics/60600/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12298",name:"Scott Hepburn",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/12392",name:"David Lopez",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:4},characters:{available:1,collectionURI:"http://gateway.marvel.com/v1/public/comics/60600/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:1},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60600/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131669",name:"cover from Deadpool (2015) #26",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131670",name:"story from Deadpool (2015) #26",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60600/events",items:[],returned:0}},{id:60599,digitalId:0,title:"Deadpool (2015) #25",issueNumber:25,variantDescription:"",description:"DEADPOOL 2099 reaches its DOUBLE-SIZED CONCLUSION! Wade\u2019s two daughters battle for his legacy! PLUS: The old man himself gets in the game! AND: IRON FIST shows just how IMMORTAL he is!",modified:"2017-01-18T11:46:43-0500",isbn:"",upc:"75960608332902511",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:48,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"DEADPOOL 2099 reaches its DOUBLE-SIZED CONCLUSION! Wade\u2019s two daughters battle for his legacy! PLUS: The old man himself gets in the game! AND: IRON FIST shows just how IMMORTAL he is!"}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60599",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60599/deadpool_2015_25?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-25/digital-comic/43799?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-01-25T00:00:00-0500"},{type:"focDate",date:"2016-12-19T00:00:00-0500"}],prices:[{type:"printPrice",price:5.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/d/90/5878fbfee568a",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/d/90/5878fbfee568a",extension:"jpg"}],creators:{available:3,collectionURI:"http://gateway.marvel.com/v1/public/comics/60599/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/486",name:"Scott Koblish",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:3},characters:{available:1,collectionURI:"http://gateway.marvel.com/v1/public/comics/60599/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:1},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60599/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131667",name:"cover from Deadpool (2015) #25",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131668",name:"story from Deadpool (2015) #25",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60599/events",items:[],returned:0}},{id:60598,digitalId:0,title:"Deadpool (2015) #24",issueNumber:24,variantDescription:"",description:"\u201cPATIENCE: ZERO\u201d comes to an end! Will Wade make a deal with the devil to save a loved one? Surely no Marvel hero would do such a thing!",modified:"2017-01-05T16:54:11-0500",isbn:"",upc:"75960608332902411",diamondCode:"",ean:"",issn:"",format:"Comic",pageCount:32,textObjects:[{type:"issue_solicit_text",language:"en-us",text:"\u201cPATIENCE: ZERO\u201d comes to an end! Will Wade make a deal with the devil to save a loved one? Surely no Marvel hero would do such a thing!"}],resourceURI:"http://gateway.marvel.com/v1/public/comics/60598",urls:[{type:"detail",url:"http://marvel.com/comics/issue/60598/deadpool_2015_24?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"},{type:"purchase",url:"http://comicstore.marvel.com/Deadpool-24/digital-comic/43794?utm_campaign=apiRef&utm_source=6128dcc2b43b21390f801611cab22adf"}],series:{resourceURI:"http://gateway.marvel.com/v1/public/series/20613",name:"Deadpool (2015 - Present)"},variants:[],collections:[],collectedIssues:[],dates:[{type:"onsaleDate",date:"2017-01-11T00:00:00-0500"},{type:"focDate",date:"2016-12-12T00:00:00-0500"}],prices:[{type:"printPrice",price:3.99}],thumbnail:{path:"http://i.annihil.us/u/prod/marvel/i/mg/3/c0/586eb66144a83",extension:"jpg"},images:[{path:"http://i.annihil.us/u/prod/marvel/i/mg/3/c0/586eb66144a83",extension:"jpg"}],creators:{available:4,collectionURI:"http://gateway.marvel.com/v1/public/comics/60598/creators",items:[{resourceURI:"http://gateway.marvel.com/v1/public/creators/11680",name:"Gerry Duggan",role:"writer"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/9081",name:"Matteo Lolli",role:"penciller"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/11930",name:"Tradd Moore",role:"penciller (cover)"},{resourceURI:"http://gateway.marvel.com/v1/public/creators/8822",name:"Jordan White",role:"editor"}],returned:4},characters:{available:1,collectionURI:"http://gateway.marvel.com/v1/public/comics/60598/characters",items:[{resourceURI:"http://gateway.marvel.com/v1/public/characters/1009268",name:"Deadpool"}],returned:1},stories:{available:2,collectionURI:"http://gateway.marvel.com/v1/public/comics/60598/stories",items:[{resourceURI:"http://gateway.marvel.com/v1/public/stories/131665",name:"cover from Deadpool (2015) #24",type:"cover"},{resourceURI:"http://gateway.marvel.com/v1/public/stories/131666",name:"story from Deadpool (2015) #24",type:"interiorStory"}],returned:2},events:{available:0,collectionURI:"http://gateway.marvel.com/v1/public/comics/60598/events",items:[],returned:0}}]})))}},{key:"handleSelection",value:function(e){this.setState({selected:this.state.selected.concat(e)})}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b509b7fd.chunk.js.map