(this["webpackJsonpsd-0x-project-movie-cards-library-stateful"]=this["webpackJsonpsd-0x-project-movie-cards-library-stateful"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=(a(15),a(1)),s=a(2),c=a(4),u=a(3),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"movie-card-header"},r.a.createElement("h1",{className:"page-title"},"Movie Cards Library"))}}]),a}(r.a.Component),d=a(9),m=a(6),p=a(5),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"search-text","data-testid":"text-input-label"},"Inclui o texto:",r.a.createElement("input",{type:"text",name:"searchText",value:t,onChange:a,id:"search-text","data-testid":"text-input"}))}}]),a}(r.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.checked,a=e.onChange;return r.a.createElement("label",{htmlFor:"search-checkbox","data-testid":"checkbox-input-label"},"Mostrar somente favoritos",r.a.createElement("input",{type:"checkbox",name:"bookmarkedOnly",checked:t,onChange:a,id:"search-checkbox","data-testid":"checkbox-input"}))}}]),a}(r.a.Component),g=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"filter-select","data-testid":"select-input-label"},"Filtrar por g\xeanero",r.a.createElement("select",{name:"selectedGenre",value:t,onChange:a,id:"filter-select","data-testid":"select-input"},r.a.createElement("option",{value:"","data-testid":"select-option"},"Todos"),r.a.createElement("option",{value:"action","data-testid":"select-option"},"A\xe7\xe3o"),r.a.createElement("option",{value:"comedy","data-testid":"select-option"},"Com\xe9dia"),r.a.createElement("option",{value:"thriller","data-testid":"select-option"},"Suspense")))}}]),a}(r.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.searchText,a=e.onSearchTextChange,n=e.bookmarkedOnly,i=e.onBookmarkedChange,o=e.selectedGenre,l=e.onSelectedGenreChange;return r.a.createElement("form",{"data-testid":"search-bar-form"},r.a.createElement(b,{value:t,onChange:a}),r.a.createElement(v,{checked:n,onChange:i}),r.a.createElement(g,{value:o,onChange:l}))}}]),a}(r.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"input-text","data-testid":"title-input-label"},"T\xedtulo",r.a.createElement("input",{type:"text",name:"title",value:t,onChange:a,id:"input-text","data-testid":"title-input"}))}}]),a}(r.a.Component),C=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"input-text-sub","data-testid":"subtitle-input-label"},"Subt\xedtulo",r.a.createElement("input",{type:"text",name:"subtitle",value:t,onChange:a,id:"input-text-sub","data-testid":"subtitle-input"}))}}]),a}(r.a.Component),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"input-text-img","data-testid":"image-input-label"},"Imagem",r.a.createElement("input",{type:"text",name:"imagePath",value:t,onChange:a,id:"input-text-img","data-testid":"image-input"}))}}]),a}(r.a.Component),O=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"input-textArea-sin","data-testid":"storyline-input-label"},"Sinopse",r.a.createElement("textarea",{name:"storyline",id:"input-textArea-sin",value:t,onChange:a,cols:"30",rows:"10","data-testid":"storyline-input"}))}}]),a}(r.a.Component),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"input-num-rat","data-testid":"rating-input-label"},"Avalia\xe7\xe3o",r.a.createElement("input",{type:"number",name:"rating",value:t,onChange:a,id:"input-num-rat","data-testid":"rating-input"}))}}]),a}(r.a.Component),E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"input-select-gen","data-testid":"genre-input-label"},"G\xeanero",r.a.createElement("select",{name:"genre",id:"input-select-gen",value:t,onChange:a,"data-testid":"genre-input"},r.a.createElement("option",{value:"action","data-testid":"genre-option"},"A\xe7\xe3o"),r.a.createElement("option",{value:"comedy","data-testid":"genre-option"},"Com\xe9dia"),r.a.createElement("option",{value:"thriller","data-testid":"genre-option"},"Suspense")))}}]),a}(r.a.Component),x=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.onClick;return r.a.createElement("button",{type:"submit",onClick:e,"data-testid":"send-button"},"Adicionar filme")}}]),a}(r.a.Component),F={subtitle:"",title:"",imagePath:"",storyline:"",rating:0,genre:"action"},w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state=F,e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.submitChanges=e.submitChanges.bind(Object(p.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n="checkbox"===t.type?t.checked:t.value;this.setState(Object(m.a)({},a,n))}},{key:"submitChanges",value:function(){(0,this.props.onClick)(this.state),this.setState(F)}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.subtitle,n=e.imagePath,i=e.storyline,o=e.rating,l=e.genre;return r.a.createElement("form",{"data-testid":"add-movie-form"},r.a.createElement(y,{value:t,onChange:this.handleChange}),r.a.createElement(C,{value:a,onChange:this.handleChange}),r.a.createElement(j,{value:n,onChange:this.handleChange}),r.a.createElement(O,{value:i,onChange:this.handleChange}),r.a.createElement(k,{value:o,onChange:this.handleChange}),r.a.createElement(E,{value:l,onChange:this.handleChange}),r.a.createElement(x,{onClick:this.submitChanges}))}}]),a}(r.a.Component),A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.rating;return r.a.createElement("div",{className:"movie-card-rating","data-testid":"rating"},r.a.createElement("span",{className:"rating"},e))}}]),a}(r.a.Component);A.defaultProps={rating:"undefined"};var S=A,N=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.subtitle,n=e.storyline,i=e.rating,o=e.imagePath;return r.a.createElement("div",{className:"movie-card","data-testid":"movie-card"},r.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:o}),r.a.createElement("div",{className:"movie-card-body"},r.a.createElement("h4",{"data-testid":"movie-card-title",className:"movie-card-title"},t),r.a.createElement("h5",{className:"movie-card-subtitle"},a),r.a.createElement("p",{className:"movie-card-storyline"},n)),r.a.createElement(S,{rating:i}))}}]),a}(r.a.Component),_=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.movies;return r.a.createElement("div",{"data-testid":"movie-list",className:"movie-list"},e.map((function(e){return r.a.createElement(N,{key:e.title,movie:e})})))}}]),a}(r.a.Component),P=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={searchText:"",bookmarkedOnly:!1,selectedGenre:"",movies:e.movies},n.handleChanges=n.handleChanges.bind(Object(p.a)(n)),n.stateFromAddMovie=n.stateFromAddMovie.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handleChanges",value:function(e){var t=e.target,a=t.name,n="checkbox"===t.type?t.checked:t.value;this.setState(Object(m.a)({},a,n),(function(){}))}},{key:"stateFromAddMovie",value:function(e){var t=this.props.movies,a={subtitle:e.subtitle,title:e.title,storyline:e.storyline,rating:e.rating,imagePath:e.imagePath,bookmarked:e.bookmarked,genre:e.genre};this.setState({movies:[].concat(Object(d.a)(t),[a])})}},{key:"render",value:function(){var e=this.state,t=e.searchText,a=e.bookmarkedOnly,n=e.selectedGenre,i=e.movies;return r.a.createElement("div",null,r.a.createElement(f,{searchText:t,bookmarkedOnly:a,selectedGenre:n,onSearchTextChange:this.handleChanges,onBookmarkedChange:this.handleChanges,onSelectedGenreChange:this.handleChanges}),r.a.createElement(_,{movies:i.filter((function(e){return a?e.bookmarked===a:e.genre.includes(n)})).filter((function(e){return e.genre.includes(n)})).filter((function(e){return e.title.toLowerCase().includes(t.toLocaleLowerCase())||e.subtitle.toLowerCase().includes(t.toLocaleLowerCase())||e.storyline.toLowerCase().includes(t.toLocaleLowerCase())}))}),r.a.createElement(w,{onClick:this.stateFromAddMovie}))}}]),a}(r.a.Component),T=(a(16),[{title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}]);var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(P,{movies:T}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.643bb932.chunk.js.map