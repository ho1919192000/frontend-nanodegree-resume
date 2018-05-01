$(document).ready(function() {
            var quote = {
                getQuote: function() {
                    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
                        $("#quote").html(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
                    });
                },
                tweetOut: function() {
                    let currentQuote = $("#quote").text();//Update the current quote
                    window.open("https://twitter.com/intent/tweet?text=" + currentQuote,"","width=640,height=400");
                }
            };
        
            quote.getQuote();
            $.ajaxSetup({//prevent a jQuery Ajax request from caching in browser
                cache: false
            });

            $("#new-quote").on("click", quote.getQuote);
            $("#tweet-out").on("click", quote.tweetOut);
        });