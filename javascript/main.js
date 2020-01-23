// c83420a4c68c0d57b76cfeb8287cac77aa93fd2d8a0b7301311969b0c66f2594

const apis = [
    {
        id: 0,
        title: "JSON Placeholder",
        information: "JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.It's great for tutorials, testing new libraries, sharing code examples, ...",
        link: "https://jsonplaceholder.typicode.com/",
        api: "https://jsonplaceholder.typicode.com/todos/"
    },{
        id: 1,
        title: "API Football",
        information: "Support of two soccer leagues using the free version.",
        link: "https://apifootball.com/"
    },{
        id: 2,
        title: "Flight Radar and Tracker",
        information: "Flight Tracker API of Aviation Edge tracks every flight in the world at all times. We compile this into our database and provide it to you with our Flight Radar API. Developers use this to create applications, website plugins, efficiency analysis, machine learning projects, insurance claims and much more. Let us know about your project and we will send you examples of other clients using our flight status data.",
        link: "https://aviation-edge.com/flight-radar-and-tracker-api/"
    }
]

let number;
$(document).ready(function(){
    apis.forEach(api => {
        if($("#links").length != 0) {
            $("#links").append(`<a class="dropdown-item" href="api.html?id=${api.id}/">${api.title}</a>`);
        }
        if($("#apis").length != 0) {
            $("#apis").append(`<div class='col-sm-6 mb-5'><div class='card'><div class='card-header'><h5 class='card-title m-0'>${api.title}</h5></div><div class='card-body'><p class='card-text'>${api.information}</p><p><a href='${api.link}' target="_blank" class='mb-1 card-text text-muted'>${api.link}</a></p><a href='api.html?id=${api.id}/' class='btn btn-info'>See API example</a></div></div></div>`);
        }
    })

    const url   = window.location.search;
    const html  = url.split("=")[1];
    number      = html.split("/")[0];
    
    if($("#jumbotron").length != 0) {
        $("#jumbotron").append(`<div class='col-sm-8 offset-sm-2'><h1 class='jumbotron-heading'>${apis[number].title}</h1><p class='lead text-muted'>${apis[number].information}</p><p><a href="#" onClick="getData();" class="btn btn-success my-2 mr-2">Fetch data</a><a href='${apis[number].link}' target='_blank' class='btn btn-info my-2'>View website</a><a href="index.html" class="btn btn-secondary my-2 ml-2">Return</a></p></div>`);
    }
});

function getData() {
    if(number == 0) {
        $("#results").append(`<div class='col-12'><p class='text-muted'>Fetching data from ${apis[number].api}</p>`);
        // fetch(apis[number].api)
        //     .then(response => response.json())
        //     .then(data => {
        //         data.forEach(todo => {
        //             console.log(todo);
        //             $("#results").append(`<div class='col-sm-4 mb-4'><div class="card"><div class="card-header"><p class='jumbotron-heading'>${todo.title}</p></div><div class="card-body"><p class='text-muted'>${todo.completed}</p></div></div></div>`);
        //         })
        //     })
        //     .catch(err => console.err(err))
        axios.get(apis[number].api)
            .then(res => {
                res.data.forEach(todo => {
                    console.log(todo);
                    $("#results").append(`<div class='col-sm-4 mb-4'><div class="card"><div class="card-header"><p class='jumbotron-heading'>${todo.title}</p></div><div class="card-body"><p class='text-muted'>${todo.completed}</p></div></div></div>`);
                })
            })
            .catch(err => console.error(err))
    } else {
        alert("Error - Nothing found.")
    }
}