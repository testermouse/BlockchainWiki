! function() {
    function e(e) {
        var t = Object.create(null);
        return function(n) {
            var r = i(n) ? n : JSON.stringify(n);
            return t[r] || (t[r] = e(n))
        }
    }
    var t = e(function(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }),
        n = Object.prototype.hasOwnProperty,
        r = Object.assign || function(e) {
            for (var t = arguments, r = 1; r < arguments.length; r++) {
                var i = Object(t[r]);
                for (var a in i) n.call(i, a) && (e[a] = i[a])
            }
            return e
        };

    function i(e) {
        return "string" == typeof e || "number" == typeof e
    }

    function a() {}

    function o(e) {
        return "function" == typeof e
    }

    function s(e, t, n, r) {
        void 0 === r && (r = a);
        var i = e._hooks[t],
            o = function(e) {
                var t = i[e];
                if (e >= i.length) r(n);
                else if ("function" == typeof t)
                    if (2 === t.length) t(n, function(t) {
                        n = t, o(e + 1)
                    });
                    else {
                        var a = t(n);
                        n = void 0 === a ? n : a, o(e + 1)
                    }
                else o(e + 1)
            };
        o(0)
    }
    var l = !0,
        c = l && document.body.clientWidth <= 600,
        u = l && window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
        h = {};

    function p(e, t) {
        if (void 0 === t && (t = !1), "string" == typeof e) {
            if (void 0 !== window.Vue) return m(e);
            e = t ? m(e) : h[e] || (h[e] = m(e))
        }
        return e
    }
    var d = l && document,
        g = l && d.body,
        f = l && d.head;

    function m(e, t) {
        return t ? e.querySelector(t) : d.querySelector(e)
    }

    function v(e, t) {
        return [].slice.call(t ? e.querySelectorAll(t) : d.querySelectorAll(e))
    }

    function b(e, t) {
        return e = d.createElement(e), t && (e.innerHTML = t), e
    }

    function y(e, t) {
        return e.appendChild(t)
    }

    function k(e, t) {
        return e.insertBefore(t, e.children[0])
    }

    function w(e, t, n) {
        o(t) ? window.addEventListener(e, t) : e.addEventListener(t, n)
    }

    function x(e, t, n) {
        o(t) ? window.removeEventListener(e, t) : e.removeEventListener(t, n)
    }

    function _(e, t, n) {
        e && e.classList[n ? t : "toggle"](n || t)
    }
    var S = Object.freeze({
        getNode: p,
        $: d,
        body: g,
        head: f,
        find: m,
        findAll: v,
        create: b,
        appendTo: y,
        before: k,
        on: w,
        off: x,
        toggleClass: _,
        style: function(e) {
            y(f, b("style", e))
        }
    });

    function C(e, t) {
        return void 0 === t && (t = ""), e && e.length ? (e.forEach(function(e) {
            t += '<li><a class="section-link" href="' + e.slug + '">' + e.title + "</a></li>", e.children && (t += '<li><ul class="children">' + C(e.children) + "</li></ul>")
        }), t) : ""
    }

    function L(e, t) {
        return '<p class="' + e + '">' + t.slice(5).trim() + "</p>"
    }
    var E, A;

    function $(e) {
        var t, n = e.loaded,
            r = e.total,
            i = e.step;
        !E && function() {
            var e = b("div");
            e.classList.add("progress"), y(g, e), E = e
        }(), t = i ? (t = parseInt(E.style.width || 0, 10) + i) > 80 ? 80 : t : Math.floor(n / r * 100), E.style.opacity = 1, E.style.width = t >= 95 ? "100%" : t + "%", t >= 95 && (clearTimeout(A), A = setTimeout(function(e) {
            E.style.opacity = 0, E.style.width = "0%"
        }, 200))
    }
    var T = {};

    function P(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = {});
        var i = new XMLHttpRequest,
            o = function() {
                i.addEventListener.apply(i, arguments)
            },
            s = T[e];
        if (s) return {
            then: function(e) {
                return e(s.content, s.opt)
            },
            abort: a
        };
        i.open("GET", e);
        for (var l in r) n.call(r, l) && i.setRequestHeader(l, r[l]);
        return i.send(), {
            then: function(n, r) {
                if (void 0 === r && (r = a), t) {
                    var s = setInterval(function(e) {
                        return $({
                            step: Math.floor(5 * Math.random() + 1)
                        })
                    }, 500);
                    o("progress", $), o("loadend", function(e) {
                        $(e), clearInterval(s)
                    })
                }
                o("error", r), o("load", function(t) {
                    var a = t.target;
                    if (a.status >= 400) r(a);
                    else {
                        var o = T[e] = {
                            content: a.response,
                            opt: {
                                updatedAt: i.getResponseHeader("last-modified")
                            }
                        };
                        n(o.content, o.opt)
                    }
                })
            },
            abort: function(e) {
                return 4 !== i.readyState && i.abort()
            }
        }
    }

    function F(e, t) {
        e.innerHTML = e.innerHTML.replace(/var\(\s*--theme-color.*?\)/g, t)
    }
    var O = /([^{]*?)\w(?=\})/g,
        M = {
            YYYY: "getFullYear",
            YY: "getYear",
            MM: function(e) {
                return e.getMonth() + 1
            },
            DD: "getDate",
            HH: "getHours",
            mm: "getMinutes",
            ss: "getSeconds"
        };
    var N = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function j(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var R = j(function(e, t) {
            (function() {
                var t = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: p,
                    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                    nptable: p,
                    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
                    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
                    table: p,
                    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                    text: /^[^\n]+/
                };
                t.bullet = /(?:[*+-]|\d+\.)/, t.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, t.item = l(t.item, "gm")(/bull/g, t.bullet)(), t.list = l(t.list)(/bull/g, t.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + t.def.source + ")")(), t.blockquote = l(t.blockquote)("def", t.def)(), t._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", t.html = l(t.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, t._tag)(), t.paragraph = l(t.paragraph)("hr", t.hr)("heading", t.heading)("lheading", t.lheading)("blockquote", t.blockquote)("tag", "<" + t._tag)("def", t.def)(), t.normal = d({}, t), t.gfm = d({}, t.normal, {
                    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                }), t.gfm.paragraph = l(t.paragraph)("(?!", "(?!" + t.gfm.fences.source.replace("\\1", "\\2") + "|" + t.list.source.replace("\\1", "\\3") + "|")(), t.tables = d({}, t.gfm, {
                    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
                });

                function n(e) {
                    this.tokens = [], this.tokens.links = {}, this.options = e || g.defaults, this.rules = t.normal, this.options.gfm && (this.options.tables ? this.rules = t.tables : this.rules = t.gfm)
                }
                n.rules = t, n.lex = function(e, t) {
                    return new n(t).lex(e)
                }, n.prototype.lex = function(e) {
                    return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
                }, n.prototype.token = function(e, n, r) {
                    var i, a, o, s, l, c, u, h, p;
                    for (e = e.replace(/^ +$/gm, ""); e;)
                        if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
                                type: "space"
                            })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
                            type: "code",
                            text: this.options.pedantic ? o : o.replace(/\n+$/, "")
                        });
                        else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "code",
                        lang: o[2],
                        text: o[3] || ""
                    });
                    else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "heading",
                        depth: o[1].length,
                        text: o[2]
                    });
                    else if (n && (o = this.rules.nptable.exec(e))) {
                        for (e = e.substring(o[0].length), c = {
                                type: "table",
                                header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: o[3].replace(/\n$/, "").split("\n")
                            }, h = 0; h < c.align.length; h++) /^ *-+: *$/.test(c.align[h]) ? c.align[h] = "right" : /^ *:-+: *$/.test(c.align[h]) ? c.align[h] = "center" : /^ *:-+ *$/.test(c.align[h]) ? c.align[h] = "left" : c.align[h] = null;
                        for (h = 0; h < c.cells.length; h++) c.cells[h] = c.cells[h].split(/ *\| */);
                        this.tokens.push(c)
                    } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "heading",
                        depth: "=" === o[2] ? 1 : 2,
                        text: o[1]
                    });
                    else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "hr"
                    });
                    else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "blockquote_start"
                    }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, n, !0), this.tokens.push({
                        type: "blockquote_end"
                    });
                    else if (o = this.rules.list.exec(e)) {
                        for (e = e.substring(o[0].length), s = o[2], this.tokens.push({
                                type: "list_start",
                                ordered: s.length > 1
                            }), i = !1, p = (o = o[0].match(this.rules.item)).length, h = 0; h < p; h++) u = (c = o[h]).length, ~(c = c.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") && (u -= c.length, c = this.options.pedantic ? c.replace(/^ {1,4}/gm, "") : c.replace(new RegExp("^ {1," + u + "}", "gm"), "")), this.options.smartLists && h !== p - 1 && (s === (l = t.bullet.exec(o[h + 1])[0]) || s.length > 1 && l.length > 1 || (e = o.slice(h + 1).join("\n") + e, h = p - 1)), a = i || /\n\n(?!\s*$)/.test(c), h !== p - 1 && (i = "\n" === c.charAt(c.length - 1), a || (a = i)), this.tokens.push({
                            type: a ? "loose_item_start" : "list_item_start"
                        }), this.token(c, !1, r), this.tokens.push({
                            type: "list_item_end"
                        });
                        this.tokens.push({
                            type: "list_end"
                        })
                    } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: this.options.sanitize ? "paragraph" : "html",
                        pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
                        text: o[0]
                    });
                    else if (!r && n && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
                        href: o[2],
                        title: o[3]
                    };
                    else if (n && (o = this.rules.table.exec(e))) {
                        for (e = e.substring(o[0].length), c = {
                                type: "table",
                                header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                            }, h = 0; h < c.align.length; h++) /^ *-+: *$/.test(c.align[h]) ? c.align[h] = "right" : /^ *:-+: *$/.test(c.align[h]) ? c.align[h] = "center" : /^ *:-+ *$/.test(c.align[h]) ? c.align[h] = "left" : c.align[h] = null;
                        for (h = 0; h < c.cells.length; h++) c.cells[h] = c.cells[h].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                        this.tokens.push(c)
                    } else if (n && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
                        type: "paragraph",
                        text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
                    });
                    else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "text",
                        text: o[0]
                    });
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                    return this.tokens
                };
                var r = {
                    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                    autolink: /^<([^ <>]+(@|:\/)[^ <>]+)>/,
                    url: p,
                    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,
                    link: /^!?\[(inside)\]\(href\)/,
                    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                    em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                    code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
                    br: /^ {2,}\n(?!\s*$)/,
                    del: p,
                    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
                };
                r._inside = /(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/, r._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, r.link = l(r.link)("inside", r._inside)("href", r._href)(), r.reflink = l(r.reflink)("inside", r._inside)(), r.normal = d({}, r), r.pedantic = d({}, r.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
                }), r.gfm = d({}, r.normal, {
                    escape: l(r.escape)("])", "~|])")(),
                    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                    del: /^~~(?=\S)([\s\S]*?\S)~~/,
                    text: l(r.text)("]|", "~]|")("|", "|https?://|")()
                }), r.breaks = d({}, r.gfm, {
                    br: l(r.br)("{2,}", "*")(),
                    text: l(r.gfm.text)("{2,}", "*")()
                });

                function i(e, t) {
                    if (this.options = t || g.defaults, this.links = e, this.rules = r.normal, this.renderer = this.options.renderer || new a, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                    this.options.gfm ? this.options.breaks ? this.rules = r.breaks : this.rules = r.gfm : this.options.pedantic && (this.rules = r.pedantic)
                }
                i.rules = r, i.output = function(e, t, n) {
                    return new i(t, n).output(e)
                }, i.prototype.output = function(e) {
                    for (var t, n, r, i, a = ""; e;)
                        if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), a += i[1];
                        else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = s(":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1])), r = this.mangle("mailto:") + n) : r = n = s(i[1]), a += this.renderer.link(r, null, n);
                    else if (this.inLink || !(i = this.rules.url.exec(e))) {
                        if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), a += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : s(i[0]) : i[0];
                        else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, a += this.outputLink(i, {
                            href: i[2],
                            title: i[3]
                        }), this.inLink = !1;
                        else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
                            if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                                a += i[0].charAt(0), e = i[0].substring(1) + e;
                                continue
                            }
                            this.inLink = !0, a += this.outputLink(i, t), this.inLink = !1
                        } else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), a += this.renderer.strong(this.output(i[2] || i[1]));
                        else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), a += this.renderer.em(this.output(i[2] || i[1]));
                        else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), a += this.renderer.codespan(s(i[2].trim(), !0));
                        else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), a += this.renderer.br();
                        else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), a += this.renderer.del(this.output(i[1]));
                        else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), a += this.renderer.text(s(this.smartypants(i[0])));
                        else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                    } else e = e.substring(i[0].length), r = n = s(i[1]), a += this.renderer.link(r, null, n);
                    return a
                }, i.prototype.outputLink = function(e, t) {
                    var n = s(t.href),
                        r = t.title ? s(t.title) : null;
                    return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, s(e[1]))
                }, i.prototype.smartypants = function(e) {
                    return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
                }, i.prototype.mangle = function(e) {
                    if (!this.options.mangle) return e;
                    for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
                    return n
                };

                function a(e) {
                    this.options = e || {}
                }
                a.prototype.code = function(e, t, n) {
                    if (this.options.highlight) {
                        var r = this.options.highlight(e, t);
                        null != r && r !== e && (n = !0, e = r)
                    }
                    return t ? '<pre><code class="' + this.options.langPrefix + s(t, !0) + '">' + (n ? e : s(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : s(e, !0)) + "\n</code></pre>"
                }, a.prototype.blockquote = function(e) {
                    return "<blockquote>\n" + e + "</blockquote>\n"
                }, a.prototype.html = function(e) {
                    return e
                }, a.prototype.heading = function(e, t, n) {
                    return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
                }, a.prototype.hr = function() {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                }, a.prototype.list = function(e, t) {
                    var n = t ? "ol" : "ul";
                    return "<" + n + ">\n" + e + "</" + n + ">\n"
                }, a.prototype.listitem = function(e) {
                    return "<li>" + e + "</li>\n"
                }, a.prototype.paragraph = function(e) {
                    return "<p>" + e + "</p>\n"
                }, a.prototype.table = function(e, t) {
                    return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
                }, a.prototype.tablerow = function(e) {
                    return "<tr>\n" + e + "</tr>\n"
                }, a.prototype.tablecell = function(e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
                }, a.prototype.strong = function(e) {
                    return "<strong>" + e + "</strong>"
                }, a.prototype.em = function(e) {
                    return "<em>" + e + "</em>"
                }, a.prototype.codespan = function(e) {
                    return "<code>" + e + "</code>"
                }, a.prototype.br = function() {
                    return this.options.xhtml ? "<br/>" : "<br>"
                }, a.prototype.del = function(e) {
                    return "<del>" + e + "</del>"
                }, a.prototype.link = function(e, t, n) {
                    if (this.options.sanitize) {
                        try {
                            var r = decodeURIComponent((i = e, i.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function(e, t) {
                                return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                            }))).replace(/[^\w:]/g, "").toLowerCase()
                        } catch (e) {
                            return n
                        }
                        if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return n
                    }
                    var i;
                    this.options.baseUrl && !h.test(e) && (e = c(this.options.baseUrl, e));
                    var a = '<a href="' + e + '"';
                    return t && (a += ' title="' + t + '"'), a += ">" + n + "</a>"
                }, a.prototype.image = function(e, t, n) {
                    this.options.baseUrl && !h.test(e) && (e = c(this.options.baseUrl, e));
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
                }, a.prototype.text = function(e) {
                    return e
                };

                function o(e) {
                    this.tokens = [], this.token = null, this.options = e || g.defaults, this.options.renderer = this.options.renderer || new a, this.renderer = this.options.renderer, this.renderer.options = this.options
                }
                o.parse = function(e, t, n) {
                    return new o(t, n).parse(e)
                }, o.prototype.parse = function(e) {
                    this.inline = new i(e.links, this.options, this.renderer), this.tokens = e.reverse();
                    for (var t = ""; this.next();) t += this.tok();
                    return t
                }, o.prototype.next = function() {
                    return this.token = this.tokens.pop()
                }, o.prototype.peek = function() {
                    return this.tokens[this.tokens.length - 1] || 0
                }, o.prototype.parseText = function() {
                    for (var e = this.token.text;
                        "text" === this.peek().type;) e += "\n" + this.next().text;
                    return this.inline.output(e)
                }, o.prototype.tok = function() {
                    switch (this.token.type) {
                        case "space":
                            return "";
                        case "hr":
                            return this.renderer.hr();
                        case "heading":
                            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                        case "code":
                            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                        case "table":
                            var e, t, n, r, i = "",
                                a = "";
                            for (n = "", e = 0; e < this.token.header.length; e++)({
                                header: !0,
                                align: this.token.align[e]
                            }), n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                                header: !0,
                                align: this.token.align[e]
                            });
                            for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                                for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                                    header: !1,
                                    align: this.token.align[r]
                                });
                                a += this.renderer.tablerow(n)
                            }
                            return this.renderer.table(i, a);
                        case "blockquote_start":
                            for (a = "";
                                "blockquote_end" !== this.next().type;) a += this.tok();
                            return this.renderer.blockquote(a);
                        case "list_start":
                            a = "";
                            for (var o = this.token.ordered;
                                "list_end" !== this.next().type;) a += this.tok();
                            return this.renderer.list(a, o);
                        case "list_item_start":
                            for (a = "";
                                "list_item_end" !== this.next().type;) a += "text" === this.token.type ? this.parseText() : this.tok();
                            return this.renderer.listitem(a);
                        case "loose_item_start":
                            for (a = "";
                                "list_item_end" !== this.next().type;) a += this.tok();
                            return this.renderer.listitem(a);
                        case "html":
                            var s = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                            return this.renderer.html(s);
                        case "paragraph":
                            return this.renderer.paragraph(this.inline.output(this.token.text));
                        case "text":
                            return this.renderer.paragraph(this.parseText())
                    }
                };

                function s(e, t) {
                    return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                }

                function l(e, t) {
                    return e = e.source, t = t || "",
                        function n(r, i) {
                            return r ? (i = (i = i.source || i).replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
                        }
                }

                function c(e, t) {
                    return u[" " + e] || (/^[^:]+:\/*[^/]*$/.test(e) ? u[" " + e] = e + "/" : u[" " + e] = e.replace(/[^/]*$/, "")), e = u[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t : e + t
                }
                var u = {},
                    h = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

                function p() {}
                p.exec = p;

                function d(e) {
                    for (var t, n, r = arguments, i = 1; i < arguments.length; i++) {
                        t = r[i];
                        for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }

                function g(e, t, r) {
                    if (r || "function" == typeof t) {
                        r || (r = t, t = null);
                        var i, a, l = (t = d({}, g.defaults, t || {})).highlight,
                            c = 0;
                        try {
                            i = n.lex(e, t)
                        } catch (e) {
                            return r(e)
                        }
                        a = i.length;
                        var u = function(e) {
                            if (e) return t.highlight = l, r(e);
                            var n;
                            try {
                                n = o.parse(i, t)
                            } catch (t) {
                                e = t
                            }
                            return t.highlight = l, e ? r(e) : r(null, n)
                        };
                        if (!l || l.length < 3) return u();
                        if (delete t.highlight, !a) return u();
                        for (; c < i.length; c++) ! function(e) {
                            "code" !== e.type ? --a || u() : l(e.text, e.lang, function(t, n) {
                                return t ? u(t) : null == n || n === e.text ? --a || u() : (e.text = n, e.escaped = !0, void(--a || u()))
                            })
                        }(i[c])
                    } else try {
                        return t && (t = d({}, g.defaults, t)), o.parse(n.lex(e, t), t)
                    } catch (e) {
                        if (e.message += "\nPlease report this to https://github.com/chjj/marked.", (t || g.defaults).silent) return "<p>An error occurred:</p><pre>" + s(e.message + "", !0) + "</pre>";
                        throw e
                    }
                }
                g.options = g.setOptions = function(e) {
                    return d(g.defaults, e), g
                }, g.defaults = {
                    gfm: !0,
                    tables: !0,
                    breaks: !1,
                    pedantic: !1,
                    sanitize: !1,
                    sanitizer: null,
                    mangle: !0,
                    smartLists: !1,
                    silent: !1,
                    highlight: null,
                    langPrefix: "lang-",
                    smartypants: !1,
                    headerPrefix: "",
                    renderer: new a,
                    xhtml: !1,
                    baseUrl: null
                }, g.Parser = o, g.parser = o.parse, g.Renderer = a, g.Lexer = n, g.lexer = n.lex, g.InlineLexer = i, g.inlineLexer = i.output, g.parse = g, e.exports = g
            }).call(function() {
                return this || ("undefined" != typeof window ? window : N)
            }())
        }),
        q = j(function(e) {
            var t = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
                n = function() {
                    var e = /\blang(?:uage)?-(\w+)\b/i,
                        n = 0,
                        r = t.Prism = {
                            manual: t.Prism && t.Prism.manual,
                            disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
                            util: {
                                encode: function(e) {
                                    return e instanceof i ? new i(e.type, r.util.encode(e.content), e.alias) : "Array" === r.util.type(e) ? e.map(r.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                                },
                                type: function(e) {
                                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                                },
                                objId: function(e) {
                                    return e.__id || Object.defineProperty(e, "__id", {
                                        value: ++n
                                    }), e.__id
                                },
                                clone: function(e) {
                                    switch (r.util.type(e)) {
                                        case "Object":
                                            var t = {};
                                            for (var n in e) e.hasOwnProperty(n) && (t[n] = r.util.clone(e[n]));
                                            return t;
                                        case "Array":
                                            return e.map(function(e) {
                                                return r.util.clone(e)
                                            })
                                    }
                                    return e
                                }
                            },
                            languages: {
                                extend: function(e, t) {
                                    var n = r.util.clone(r.languages[e]);
                                    for (var i in t) n[i] = t[i];
                                    return n
                                },
                                insertBefore: function(e, t, n, i) {
                                    var a = (i = i || r.languages)[e];
                                    if (2 == arguments.length) {
                                        n = arguments[1];
                                        for (var o in n) n.hasOwnProperty(o) && (a[o] = n[o]);
                                        return a
                                    }
                                    var s = {};
                                    for (var l in a)
                                        if (a.hasOwnProperty(l)) {
                                            if (l == t)
                                                for (var o in n) n.hasOwnProperty(o) && (s[o] = n[o]);
                                            s[l] = a[l]
                                        }
                                    return r.languages.DFS(r.languages, function(t, n) {
                                        n === i[e] && t != e && (this[t] = s)
                                    }), i[e] = s
                                },
                                DFS: function(e, t, n, i) {
                                    i = i || {};
                                    for (var a in e) e.hasOwnProperty(a) && (t.call(e, a, e[a], n || a), "Object" !== r.util.type(e[a]) || i[r.util.objId(e[a])] ? "Array" !== r.util.type(e[a]) || i[r.util.objId(e[a])] || (i[r.util.objId(e[a])] = !0, r.languages.DFS(e[a], t, a, i)) : (i[r.util.objId(e[a])] = !0, r.languages.DFS(e[a], t, null, i)))
                                }
                            },
                            plugins: {},
                            highlightAll: function(e, t) {
                                r.highlightAllUnder(document, e, t)
                            },
                            highlightAllUnder: function(e, t, n) {
                                var i = {
                                    callback: n,
                                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                                };
                                r.hooks.run("before-highlightall", i);
                                for (var a, o = i.elements || e.querySelectorAll(i.selector), s = 0; a = o[s++];) r.highlightElement(a, !0 === t, i.callback)
                            },
                            highlightElement: function(n, i, a) {
                                for (var o, s, l = n; l && !e.test(l.className);) l = l.parentNode;
                                l && (o = (l.className.match(e) || [, ""])[1].toLowerCase(), s = r.languages[o]), n.className = n.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, n.parentNode && (l = n.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o));
                                var c = {
                                    element: n,
                                    language: o,
                                    grammar: s,
                                    code: n.textContent
                                };
                                if (r.hooks.run("before-sanity-check", c), !c.code || !c.grammar) return c.code && (r.hooks.run("before-highlight", c), c.element.textContent = c.code, r.hooks.run("after-highlight", c)), void r.hooks.run("complete", c);
                                if (r.hooks.run("before-highlight", c), i && t.Worker) {
                                    var u = new Worker(r.filename);
                                    u.onmessage = function(e) {
                                        c.highlightedCode = e.data, r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, a && a.call(c.element), r.hooks.run("after-highlight", c), r.hooks.run("complete", c)
                                    }, u.postMessage(JSON.stringify({
                                        language: c.language,
                                        code: c.code,
                                        immediateClose: !0
                                    }))
                                } else c.highlightedCode = r.highlight(c.code, c.grammar, c.language), r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, a && a.call(n), r.hooks.run("after-highlight", c), r.hooks.run("complete", c)
                            },
                            highlight: function(e, t, n) {
                                var a = r.tokenize(e, t);
                                return i.stringify(r.util.encode(a), n)
                            },
                            matchGrammar: function(e, t, n, i, a, o, s) {
                                var l = r.Token;
                                for (var c in n)
                                    if (n.hasOwnProperty(c) && n[c]) {
                                        if (c == s) return;
                                        var u = n[c];
                                        u = "Array" === r.util.type(u) ? u : [u];
                                        for (var h = 0; h < u.length; ++h) {
                                            var p = u[h],
                                                d = p.inside,
                                                g = !!p.lookbehind,
                                                f = !!p.greedy,
                                                m = 0,
                                                v = p.alias;
                                            if (f && !p.pattern.global) {
                                                var b = p.pattern.toString().match(/[imuy]*$/)[0];
                                                p.pattern = RegExp(p.pattern.source, b + "g")
                                            }
                                            p = p.pattern || p;
                                            for (var y = i, k = a; y < t.length; k += t[y].length, ++y) {
                                                var w = t[y];
                                                if (t.length > e.length) return;
                                                if (!(w instanceof l)) {
                                                    p.lastIndex = 0;
                                                    var x = 1;
                                                    if (!(A = p.exec(w)) && f && y != t.length - 1) {
                                                        if (p.lastIndex = k, !(A = p.exec(e))) break;
                                                        for (var _ = A.index + (g ? A[1].length : 0), S = A.index + A[0].length, C = y, L = k, E = t.length; C < E && (L < S || !t[C].type && !t[C - 1].greedy); ++C) _ >= (L += t[C].length) && (++y, k = L);
                                                        if (t[y] instanceof l || t[C - 1].greedy) continue;
                                                        x = C - y, w = e.slice(k, L), A.index -= k
                                                    }
                                                    if (A) {
                                                        g && (m = A[1].length);
                                                        S = (_ = A.index + m) + (A = A[0].slice(m)).length;
                                                        var A, $ = w.slice(0, _),
                                                            T = w.slice(S),
                                                            P = [y, x];
                                                        $ && (++y, k += $.length, P.push($));
                                                        var F = new l(c, d ? r.tokenize(A, d) : A, v, A, f);
                                                        if (P.push(F), T && P.push(T), Array.prototype.splice.apply(t, P), 1 != x && r.matchGrammar(e, t, n, y, k, !0, c), o) break
                                                    } else if (o) break
                                                }
                                            }
                                        }
                                    }
                            },
                            tokenize: function(e, t, n) {
                                var i = [e],
                                    a = t.rest;
                                if (a) {
                                    for (var o in a) t[o] = a[o];
                                    delete t.rest
                                }
                                return r.matchGrammar(e, i, t, 0, 0, !1), i
                            },
                            hooks: {
                                all: {},
                                add: function(e, t) {
                                    var n = r.hooks.all;
                                    n[e] = n[e] || [], n[e].push(t)
                                },
                                run: function(e, t) {
                                    var n = r.hooks.all[e];
                                    if (n && n.length)
                                        for (var i, a = 0; i = n[a++];) i(t)
                                }
                            }
                        },
                        i = r.Token = function(e, t, n, r, i) {
                            this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!i
                        };
                    if (i.stringify = function(e, t, n) {
                            if ("string" == typeof e) return e;
                            if ("Array" === r.util.type(e)) return e.map(function(n) {
                                return i.stringify(n, t, e)
                            }).join("");
                            var a = {
                                type: e.type,
                                content: i.stringify(e.content, t, n),
                                tag: "span",
                                classes: ["token", e.type],
                                attributes: {},
                                language: t,
                                parent: n
                            };
                            if (e.alias) {
                                var o = "Array" === r.util.type(e.alias) ? e.alias : [e.alias];
                                Array.prototype.push.apply(a.classes, o)
                            }
                            r.hooks.run("wrap", a);
                            var s = Object.keys(a.attributes).map(function(e) {
                                return e + '="' + (a.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                            }).join(" ");
                            return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + a.content + "</" + a.tag + ">"
                        }, !t.document) return t.addEventListener ? (r.disableWorkerMessageHandler || t.addEventListener("message", function(e) {
                        var n = JSON.parse(e.data),
                            i = n.language,
                            a = n.code,
                            o = n.immediateClose;
                        t.postMessage(r.highlight(a, r.languages[i], i)), o && t.close()
                    }, !1), t.Prism) : t.Prism;
                    var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
                    return a && (r.filename = a.src, r.manual || a.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r.highlightAll))), t.Prism
                }();
            e.exports && (e.exports = n), void 0 !== N && (N.Prism = n), n.languages.markup = {
                comment: /<!--[\s\S]*?-->/,
                prolog: /<\?[\s\S]+?\?>/,
                doctype: /<!DOCTYPE[\s\S]+?>/i,
                cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/i,
                            inside: {
                                punctuation: /^<\/?/,
                                namespace: /^[^\s>\/:]+:/
                            }
                        },
                        "attr-value": {
                            pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                            inside: {
                                punctuation: [/^=/, {
                                    pattern: /(^|[^\\])["']/,
                                    lookbehind: !0
                                }]
                            }
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: {
                                namespace: /^[^\s>\/:]+:/
                            }
                        }
                    }
                },
                entity: /&#?[\da-z]{1,8};/i
            }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.hooks.add("wrap", function(e) {
                "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
            }), n.languages.xml = n.languages.markup, n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
                    inside: {
                        rule: /@[\w-]+/
                    }
                },
                url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
                selector: /[^{}\s][^{};]*?(?=\s*\{)/,
                string: {
                    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                important: /\B!important\b/i,
                function: /[-a-z0-9]+(?=\()/i,
                punctuation: /[(){};:]/
            }, n.languages.css.atrule.inside.rest = n.util.clone(n.languages.css), n.languages.markup && (n.languages.insertBefore("markup", "tag", {
                style: {
                    pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                    lookbehind: !0,
                    inside: n.languages.css,
                    alias: "language-css",
                    greedy: !0
                }
            }), n.languages.insertBefore("inside", "attr-value", {
                "style-attr": {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        "attr-name": {
                            pattern: /^\s*style/i,
                            inside: n.languages.markup.tag.inside
                        },
                        punctuation: /^\s*=\s*['"]|['"]\s*$/,
                        "attr-value": {
                            pattern: /.+/i,
                            inside: n.languages.css
                        }
                    },
                    alias: "language-css"
                }
            }, n.languages.markup.tag)), n.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0
                }],
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
                    lookbehind: !0,
                    inside: {
                        punctuation: /[.\\]/
                    }
                },
                keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                boolean: /\b(?:true|false)\b/,
                function: /[a-z0-9_]+(?=\()/i,
                number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
                operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
                punctuation: /[{}[\];(),.:]/
            }, n.languages.javascript = n.languages.extend("clike", {
                keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
                number: /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
                function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
                operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
            }), n.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
                    lookbehind: !0,
                    greedy: !0
                },
                "function-variable": {
                    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
                    alias: "function"
                }
            }), n.languages.insertBefore("javascript", "string", {
                "template-string": {
                    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /\$\{[^}]+\}/,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\$\{|\}$/,
                                    alias: "punctuation"
                                },
                                rest: n.languages.javascript
                            }
                        },
                        string: /[\s\S]+/
                    }
                }
            }), n.languages.markup && n.languages.insertBefore("markup", "tag", {
                script: {
                    pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                    lookbehind: !0,
                    inside: n.languages.javascript,
                    alias: "language-javascript",
                    greedy: !0
                }
            }), n.languages.js = n.languages.javascript, "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function() {
                var e = {
                    js: "javascript",
                    py: "python",
                    rb: "ruby",
                    ps1: "powershell",
                    psm1: "powershell",
                    sh: "bash",
                    bat: "batch",
                    h: "c",
                    tex: "latex"
                };
                Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t) {
                    for (var r, i = t.getAttribute("data-src"), a = t, o = /\blang(?:uage)?-(?!\*)(\w+)\b/i; a && !o.test(a.className);) a = a.parentNode;
                    if (a && (r = (t.className.match(o) || [, ""])[1]), !r) {
                        var s = (i.match(/\.(\w+)$/) || [, ""])[1];
                        r = e[s] || s
                    }
                    var l = document.createElement("code");
                    l.className = "language-" + r, t.textContent = "", l.textContent = "Loading…", t.appendChild(l);
                    var c = new XMLHttpRequest;
                    c.open("GET", i, !0), c.onreadystatechange = function() {
                        4 == c.readyState && (c.status < 400 && c.responseText ? (l.textContent = c.responseText, n.highlightElement(l)) : c.status >= 400 ? l.textContent = "✖ Error " + c.status + " while fetching file: " + c.statusText : l.textContent = "✖ Error: File does not exist or is empty")
                    }, c.send(null)
                })
            }, document.addEventListener("DOMContentLoaded", self.Prism.fileHighlight))
        });

    function H(e, t) {
        var n = [],
            r = {};
        return e.forEach(function(e) {
            var i = e.level || 1,
                a = i - 1;
            i > t || (r[a] ? r[a].children = (r[a].children || []).concat(e) : n.push(e), r[i] = e)
        }), n
    }
    var z = {},
        I = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;

    function B(e) {
        return e.toLowerCase()
    }

    function U(e) {
        if ("string" != typeof e) return "";
        var t = e.trim().replace(/[A-Z]+/g, B).replace(/<[^>\d]+>/g, "").replace(I, "").replace(/\s/g, "-").replace(/-+/g, "-").replace(/^(\d)/, "_$1"),
            r = z[t];
        return r = n.call(z, t) ? r + 1 : 0, z[t] = r, r && (t = t + "-" + r), t
    }
    U.clear = function() {
        z = {}
    };

    function D(e, t) {
        return '<img class="emoji" src="https://assets-cdn.github.com/images/icons/emoji/' + t + '.png" alt="' + t + '" />'
    }
    var Y = decodeURIComponent,
        W = encodeURIComponent;

    function G(e) {
        var t = {};
        return (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
            var n = e.replace(/\+/g, " ").split("=");
            t[n[0]] = n[1] && Y(n[1])
        }), t) : t
    }

    function X(e, t) {
        void 0 === t && (t = []);
        var n = [];
        for (var r in e) t.indexOf(r) > -1 || n.push(e[r] ? (W(r) + "=" + W(e[r])).toLowerCase() : W(r));
        return n.length ? "?" + n.join("&") : ""
    }
    var Q = e(function(e) {
            return /(:|(\/{2}))/g.test(e)
        }),
        V = e(function(e) {
            return /\/$/g.test(e) ? e : (e = e.match(/(\S*\/)[^/]+$/)) ? e[1] : ""
        }),
        Z = e(function(e) {
            return e.replace(/^\/+/, "/").replace(/([^:])\/{2,}/g, "$1/")
        });

    function J() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return Z(e.join("/"))
    }
    var K = e(function(e) {
            return e.replace("#", "?id=")
        }),
        ee = {};

    function te(e) {
        void 0 === e && (e = "");
        var t = {};
        return e && (e = e.replace(/:([\w-]+)=?([\w-]+)?/g, function(e, n, r) {
            return t[n] = r && r.replace(/&quot;/g, "") || !0, ""
        }).trim()), {
            str: e,
            config: t
        }
    }
    var ne = {
            markdown: function(e) {
                return {
                    url: e
                }
            },
            iframe: function(e, t) {
                return {
                    code: '<iframe src="' + e + '" ' + (t || "width=100% height=400") + "></iframe>"
                }
            },
            video: function(e, t) {
                return {
                    code: '<video src="' + e + '" ' + (t || "controls") + ">Not Support</video>"
                }
            },
            audio: function(e, t) {
                return {
                    code: '<audio src="' + e + '" ' + (t || "controls") + ">Not Support</audio>"
                }
            },
            code: function(e, t) {
                var n = e.match(/\.(\w+)$/);
                return "md" === (n = t || n && n[1]) && (n = "markdown"), {
                    url: e,
                    lang: n
                }
            }
        },
        re = function(t, n) {
            this.config = t, this.router = n, this.cacheTree = {}, this.toc = [], this.linkTarget = t.externalLinkTarget || "_blank", this.contentBase = n.getBasePath();
            var a, s = this._initRenderer(),
                c = t.markdown || {};
            o(c) ? a = c(R, s) : (R.setOptions(r(c, {
                renderer: r(s, c.renderer)
            })), a = R), this._marked = a, this.compile = e(function(e) {
                var n = "";
                if (!e) return e;
                n = i(e) ? a(e) : a.parser(e), n = t.noEmoji ? n : (r = n, r.replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g, function(e) {
                    return e.replace(/:/g, "__colon__")
                }).replace(/:(\w+?):/gi, l && window.emojify || D).replace(/__colon__/g, ":"));
                var r;
                return U.clear(), n
            })
        };
    re.prototype.compileEmbed = function(e, t) {
        var n, r = te(t),
            i = r.str,
            a = r.config;
        if (t = i, a.include) {
            Q(e) || (e = J(this.contentBase, V(this.router.getCurrentPath()), e));
            var o;
            if (a.type && (o = ne[a.type]))(n = o.call(this, e, t)).type = a.type;
            else {
                var s = "code";
                /\.(md|markdown)/.test(e) ? s = "markdown" : /\.html?/.test(e) ? s = "iframe" : /\.(mp4|ogg)/.test(e) ? s = "video" : /\.mp3/.test(e) && (s = "audio"), (n = ne[s].call(this, e, t)).type = s
            }
            return n
        }
    }, re.prototype._matchNotCompileLink = function(e) {
        for (var t = this.config.noCompileLinks || [], n = 0; n < t.length; n++) {
            var r = t[n];
            if ((ee[r] || (ee[r] = new RegExp("^" + r + "$"))).test(e)) return e
        }
    }, re.prototype._initRenderer = function() {
        var e = new R.Renderer,
            t = this.linkTarget,
            n = this.router,
            r = this.contentBase,
            i = this,
            a = {};
        a.heading = e.heading = function(e, t) {
            var r = {
                level: t,
                title: e
            };
            /{docsify-ignore}/g.test(e) && (e = e.replace("{docsify-ignore}", ""), r.title = e, r.ignoreSubHeading = !0), /{docsify-ignore-all}/g.test(e) && (e = e.replace("{docsify-ignore-all}", ""), r.title = e, r.ignoreAllSubs = !0);
            var a = U(e),
                o = n.toURL(n.getCurrentPath(), {
                    id: a
                });
            return r.slug = o, i.toc.push(r), "<h" + t + ' id="' + a + '"><a href="' + o + '" data-id="' + a + '" class="anchor"><span>' + e + "</span></a></h" + t + ">"
        }, a.code = e.code = function(e, t) {
            void 0 === t && (t = ""), e = e.replace(/@DOCSIFY_QM@/g, "`");
            return '<pre v-pre data-lang="' + t + '"><code class="lang-' + t + '">' + q.highlight(e, q.languages[t] || q.languages.markup) + "</code></pre>"
        }, a.link = e.link = function(e, r, a) {
            void 0 === r && (r = "");
            var o = "",
                s = te(r),
                l = s.str,
                c = s.config;
            return r = l, Q(e) || i._matchNotCompileLink(e) || c.ignore ? o += ' target="' + t + '"' : (e === i.config.homepage && (e = "README"), e = n.toURL(e, null, n.getCurrentPath())), c.target && (o += " target=" + c.target), c.disabled && (o += " disabled", e = "javascript:void(0)"), r && (o += ' title="' + r + '"'), '<a href="' + e + '"' + o + ">" + a + "</a>"
        }, a.paragraph = e.paragraph = function(e) {
            return /^!&gt;/.test(e) ? L("tip", e) : /^\?&gt;/.test(e) ? L("warn", e) : "<p>" + e + "</p>"
        }, a.image = e.image = function(e, t, i) {
            var a = e,
                o = "",
                s = te(t),
                l = s.str,
                c = s.config;
            t = l, c["no-zoom"] && (o += " data-no-zoom"), t && (o += ' title="' + t + '"');
            var u = c.size;
            if (u) {
                var h = u.split("x");
                h[1] ? o += "width=" + h[0] + " height=" + h[1] : o += "width=" + h[0]
            }
            return Q(e) || (a = J(r, V(n.getCurrentPath()), e)), '<img src="' + a + '"data-origin="' + e + '" alt="' + i + '"' + o + ">"
        };
        var o = /^\[([ x])\] +/;
        return a.listitem = e.listitem = function(e) {
            var t = o.exec(e);
            return t && (e = e.replace(o, '<input type="checkbox" ' + ("x" === t[1] ? "checked" : "") + " />")), "<li" + (t ? ' class="task-list-item"' : "") + ">" + e + "</li>\n"
        }, e.origin = a, e
    }, re.prototype.sidebar = function(e, t) {
        var n = this.router.getCurrentPath(),
            r = "";
        if (e) r = this.compile(e);
        else {
            var i = this.cacheTree[n] || H(this.toc, t);
            r = C(i, "<ul>"), this.cacheTree[n] = i
        }
        return r
    }, re.prototype.subSidebar = function(e) {
        if (e) {
            var t = this.router.getCurrentPath(),
                n = this.cacheTree,
                r = this.toc;
            r[0] && r[0].ignoreAllSubs && r.splice(0), r[0] && 1 === r[0].level && r.shift();
            for (var i = 0; i < r.length; i++) r[i].ignoreSubHeading && r.splice(i, 1) && i--;
            var a = n[t] || H(r, e);
            return n[t] = a, this.toc = [], C(a, '<ul class="app-sub-sidebar">')
        }
        this.toc = []
    }, re.prototype.article = function(e) {
        return this.compile(e)
    }, re.prototype.cover = function(e) {
        var t = this.toc.slice(),
            n = this.compile(e);
        return this.toc = t.slice(), n
    };
    var ie = d.title;

    function ae() {
        var e = p("section.cover");
        if (e) {
            var t = e.getBoundingClientRect().height;
            window.pageYOffset >= t || e.classList.contains("hidden") ? _(g, "add", "sticky") : _(g, "remove", "sticky")
        }
    }

    function oe(e, t, n, r) {
        var i, a = v(t = p(t), "a"),
            o = decodeURI(e.toURL(e.getCurrentPath()));
        return a.sort(function(e, t) {
            return t.href.length - e.href.length
        }).forEach(function(e) {
            var t = e.getAttribute("href"),
                r = n ? e.parentNode : e;
            0 !== o.indexOf(t) || i ? _(r, "remove", "active") : (i = e, _(r, "add", "active"))
        }), r && (d.title = i ? i.innerText + " - " + ie : ie), i
    }
    var se = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var le = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.duration = t.duration || 1e3, this.ease = t.easing || this._defaultEase, this.start = t.start, this.end = t.end, this.frame = null, this.next = null, this.isRunning = !1, this.events = {}, this.direction = this.start < this.end ? "up" : "down"
            }
            return se(e, [{
                key: "begin",
                value: function() {
                    return this.isRunning || this.next === this.end || (this.frame = window.requestAnimationFrame(this._tick.bind(this))), this
                }
            }, {
                key: "stop",
                value: function() {
                    return window.cancelAnimationFrame(this.frame), this.isRunning = !1, this.frame = null, this.timeStart = null, this.next = null, this
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return this.events[e] = this.events[e] || [], this.events[e].push(t), this
                }
            }, {
                key: "emit",
                value: function(e, t) {
                    var n = this,
                        r = this.events[e];
                    r && r.forEach(function(e) {
                        return e.call(n, t)
                    })
                }
            }, {
                key: "_tick",
                value: function(e) {
                    this.isRunning = !0;
                    var t = this.next || this.start;
                    this.timeStart || (this.timeStart = e), this.timeElapsed = e - this.timeStart, this.next = Math.round(this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration)), this._shouldTick(t) ? (this.emit("tick", this.next), this.frame = window.requestAnimationFrame(this._tick.bind(this))) : (this.emit("tick", this.end), this.emit("done", null))
                }
            }, {
                key: "_shouldTick",
                value: function(e) {
                    return {
                        up: this.next < this.end && e <= this.next,
                        down: this.next > this.end && e >= this.next
                    } [this.direction]
                }
            }, {
                key: "_defaultEase",
                value: function(e, t, n, r) {
                    return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                }
            }]), e
        }(),
        ce = {},
        ue = !1,
        he = null,
        pe = !0,
        de = 0;

    function ge(e) {
        if (pe) {
            for (var t, n = p(".sidebar"), r = v(".anchor"), i = m(n, ".sidebar-nav"), a = m(n, "li.active"), o = document.documentElement, s = (o && o.scrollTop || document.body.scrollTop) - de, l = 0, c = r.length; l < c; l += 1) {
                var u = r[l];
                if (u.offsetTop > s) {
                    t || (t = u);
                    break
                }
                t = u
            }
            if (t) {
                var h = ce[fe(decodeURIComponent(e), t.getAttribute("data-id"))];
                if (h && h !== a && (a && a.classList.remove("active"), h.classList.add("active"), a = h, !ue && g.classList.contains("sticky"))) {
                    var d = n.clientHeight,
                        f = a.offsetTop + a.clientHeight + 40,
                        b = f - 0 < d,
                        y = a.offsetTop >= i.scrollTop && f <= i.scrollTop + d ? i.scrollTop : b ? 0 : f - d;
                    n.scrollTop = y
                }
            }
        }
    }

    function fe(e, t) {
        return e + "?id=" + t
    }

    function me(e, t) {
        if (t) {
            var n = m("#" + t);
            n && (r = n, he && he.stop(), pe = !1, he = new le({
                start: window.pageYOffset,
                end: r.getBoundingClientRect().top + window.pageYOffset,
                duration: 500
            }).on("tick", function(e) {
                return window.scrollTo(0, e)
            }).on("done", function() {
                pe = !0, he = null
            }).begin());
            var r, i = ce[fe(e, t)],
                a = m(p(".sidebar"), "li.active");
            a && a.classList.remove("active"), i && i.classList.add("active")
        }
    }
    var ve = d.scrollingElement || d.documentElement;
    var be = {};

    function ye(e, t) {
        var n = e.compiler,
            i = e.raw;
        void 0 === i && (i = "");
        var a, o = e.fetch;
        if (a = be[i]) return t(a);
        var s = n._marked,
            l = s.lexer(i),
            c = [],
            u = s.InlineLexer.rules.link,
            h = l.links;
        l.forEach(function(e, t) {
            "paragraph" === e.type && (e.text = e.text.replace(new RegExp(u.source, "g"), function(e, r, i, a) {
                var o = n.compileEmbed(i, a);
                return o ? ("markdown" !== o.type && "code" !== o.type || c.push({
                    index: t,
                    embed: o
                }), o.code) : e
            }))
        });
        var p = 0;
        ! function(e, t) {
            var n, r = e.embedTokens,
                i = e.compile,
                a = (e.fetch, 0),
                o = 1;
            if (!r.length) return t({});
            for (; n = r[a++];) {
                var s = function(e) {
                    return function(n) {
                        var r;
                        n && ("markdown" === e.embed.type ? r = i.lexer(n) : "code" === e.embed.type && (r = i.lexer("```" + e.embed.lang + "\n" + n.replace(/`/g, "@DOCSIFY_QM@") + "\n```\n"))), t({
                            token: e,
                            embedToken: r
                        }), ++o >= a && t({})
                    }
                }(n);
                P(n.embed.url).then(s)
            }
        }({
            compile: s,
            embedTokens: c,
            fetch: o
        }, function(e) {
            var n = e.embedToken,
                a = e.token;
            if (a) {
                var o = a.index + p;
                r(h, n.links), l = l.slice(0, o).concat(n, l.slice(o + 1)), p += n.length - 1
            } else be[i] = l.concat(), l.links = be[i].links = h, t(l)
        })
    }

    function ke() {
        var e = v(".markdown-section>script").filter(function(e) {
            return !/template/.test(e.type)
        })[0];
        if (!e) return !1;
        var t = e.innerText.trim();
        if (!t) return !1;
        setTimeout(function(e) {
            window.__EXECUTE_RESULT__ = new Function(t)()
        }, 0)
    }

    function we(e, t, n) {
        return t = "function" == typeof n ? n(t) : "string" == typeof n ? function(e) {
            var t = [],
                n = 0;
            return e.replace(O, function(r, i, a) {
                    t.push(e.substring(n, a - 1)), n = a += r.length + 1, t.push(function(e) {
                        return ("00" + ("string" == typeof M[r] ? e[M[r]]() : M[r](e))).slice(-r.length)
                    })
                }), n !== e.length && t.push(e.substring(n)),
                function(e) {
                    for (var n = "", r = 0, i = e || new Date; r < t.length; r++) n += "string" == typeof t[r] ? t[r] : t[r](i);
                    return n
                }
        }(n)(new Date(t)) : t, e.replace(/{docsify-updated}/g, t)
    }

    function xe(e) {
        e || (e = "<h1>404 - Not found</h1>"), this._renderTo(".markdown-section", e), !this.config.loadSidebar && this._renderSidebar(), !1 === this.config.executeScript || void 0 === window.Vue || ke() ? this.config.executeScript && ke() : setTimeout(function(e) {
            var t = window.__EXECUTE_RESULT__;
            t && t.$destroy && t.$destroy(), window.__EXECUTE_RESULT__ = (new window.Vue).$mount("#main")
        }, 0)
    }

    function _e(e) {
        var t = e.config;
        e.compiler = new re(t, e.router), l && (window.__current_docsify_compiler__ = e.compiler);
        var n = t.el || "#app",
            r = m("nav") || b("nav"),
            i = m(n),
            a = "",
            o = g;
        i ? (t.repo && (a += (s = t.repo, s ? (/\/\//.test(s) || (s = "https://github.com/" + s), '<a href="' + (s = s.replace(/^git\+/, "")) + '" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>') : "")), t.coverpage && (a += '<section class="cover show" style="background: linear-gradient(to left bottom, hsl(' + Math.floor(255 * Math.random()) + ", 100%, 85%) 0%,hsl(" + Math.floor(255 * Math.random()) + ', 100%, 85%) 100%)"><div class="cover-main">\x3c!--cover--\x3e</div><div class="mask"></div></section>'), t.logo && (t.logo = J(e.router.getBasePath(), t.logo)), a += function(e) {
            var t = '<button class="sidebar-toggle"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button><aside class="sidebar">' + (e.name ? '<h1><a class="app-name-link" data-nosearch>' + (e.logo ? "<img alt=" + e.name + " src=" + e.logo + ">" : e.name) + "</a></h1>" : "") + '<div class="sidebar-nav">\x3c!--sidebar--\x3e</div></aside>';
            return (c ? t + "<main>" : "<main>" + t) + '<section class="content"><article class="markdown-section" id="main">\x3c!--main--\x3e</article></section></main>'
        }(t), e._renderTo(i, a, !0)) : e.rendered = !0;
        var s;
        t.mergeNavbar && c ? o = m(".sidebar") : (r.classList.add("app-nav"), t.repo || r.classList.add("no-badge")), t.loadNavbar && k(o, r), t.themeColor && (d.head.appendChild(b("div", (u = t.themeColor, "<style>:root{--theme-color: " + u + ";}</style>")).firstElementChild), function(e) {
            if (!(window.CSS && window.CSS.supports && window.CSS.supports("(--v:red)"))) {
                var t = v("style:not(.inserted),link");
                [].forEach.call(t, function(t) {
                    if ("STYLE" === t.nodeName) F(t, e);
                    else if ("LINK" === t.nodeName) {
                        var n = t.getAttribute("href");
                        if (!/\.css$/.test(n)) return;
                        P(n).then(function(t) {
                            var n = b("style", t);
                            f.appendChild(n), F(n, e)
                        })
                    }
                })
            }
        }(t.themeColor));
        var u;
        e._updateRender(), _(g, "ready")
    }
    var Se = {};
    var Ce = function(e) {
        this.config = e
    };
    Ce.prototype.getBasePath = function() {
        return this.config.basePath
    }, Ce.prototype.getFile = function(e, t) {
        void 0 === e && (e = this.getCurrentPath());
        var n = this.config,
            r = this.getBasePath(),
            i = "string" == typeof n.ext ? n.ext : ".md";
        e = n.alias ? function e(t, n, r) {
            var i = Object.keys(n).filter(function(e) {
                return (Se[e] || (Se[e] = new RegExp("^" + e + "$"))).test(t) && t !== r
            })[0];
            return i ? e(t.replace(Se[i], n[i]), n, t) : t
        }(e, n.alias) : e, a = e, o = i;
        var a, o;
        return e = (e = new RegExp("\\.(" + o.replace(/^\./, "") + "|html)$", "g").test(a) ? a : /\/$/g.test(a) ? a + "README" + o : "" + a + o) === "/README" + i ? n.homepage || e : e, e = Q(e) ? e : J(r, e), t && (e = e.replace(new RegExp("^" + r), "")), e
    }, Ce.prototype.onchange = function(e) {
        void 0 === e && (e = a), e()
    }, Ce.prototype.getCurrentPath = function() {}, Ce.prototype.normalize = function() {}, Ce.prototype.parse = function() {}, Ce.prototype.toURL = function(e, t, n) {
        var i = n && "#" === e[0],
            a = this.parse(K(e));
        if (a.query = r({}, a.query, t), e = (e = a.path + X(a.query)).replace(/\.md(\?)|\.md$/, "$1"), i) {
            var o = n.indexOf("?");
            e = (o > 0 ? n.substr(0, o) : n) + e
        }
        return Z("/" + e)
    };

    function Le(e) {
        var t = location.href.indexOf("#");
        location.replace(location.href.slice(0, t >= 0 ? t : 0) + "#" + e)
    }
    var Ee = function(e) {
            function t(t) {
                e.call(this, t), this.mode = "hash"
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getBasePath = function() {
                var e = window.location.pathname || "",
                    t = this.config.basePath;
                return /^(\/|https?:)/g.test(t) ? t : Z(e + "/" + t)
            }, t.prototype.getCurrentPath = function() {
                var e = location.href,
                    t = e.indexOf("#");
                return -1 === t ? "" : e.slice(t + 1)
            }, t.prototype.onchange = function(e) {
                void 0 === e && (e = a), w("hashchange", e)
            }, t.prototype.normalize = function() {
                var e = this.getCurrentPath();
                if ("/" === (e = K(e)).charAt(0)) return Le(e);
                Le("/" + e)
            }, t.prototype.parse = function(e) {
                void 0 === e && (e = location.href);
                var t = "",
                    n = e.indexOf("#");
                n >= 0 && (e = e.slice(n + 1));
                var r = e.indexOf("?");
                return r >= 0 && (t = e.slice(r + 1), e = e.slice(0, r)), {
                    path: e,
                    file: this.getFile(e, !0),
                    query: G(t)
                }
            }, t.prototype.toURL = function(t, n, r) {
                return "#" + e.prototype.toURL.call(this, t, n, r)
            }, t
        }(Ce),
        Ae = function(e) {
            function t(t) {
                e.call(this, t), this.mode = "history"
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getCurrentPath = function() {
                var e = this.getBasePath(),
                    t = window.location.pathname;
                return e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash
            }, t.prototype.onchange = function(e) {
                void 0 === e && (e = a), w("click", function(t) {
                    var n = "A" === t.target.tagName ? t.target : t.target.parentNode;
                    if ("A" === n.tagName && !/_blank/.test(n.target)) {
                        t.preventDefault();
                        var r = n.href;
                        window.history.pushState({
                            key: r
                        }, "", r), e()
                    }
                }), w("popstate", e)
            }, t.prototype.parse = function(e) {
                void 0 === e && (e = location.href);
                var t = "",
                    n = e.indexOf("?");
                n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n));
                var r = J(location.origin),
                    i = e.indexOf(r);
                return i > -1 && (e = e.slice(i + r.length)), {
                    path: e,
                    file: this.getFile(e),
                    query: G(t)
                }
            }, t
        }(Ce);
    var $e = {};

    function Te(e) {
        e.router.normalize(), e.route = e.router.parse(), g.setAttribute("data-page", e.route.file)
    }

    function Pe(e) {
        ! function(e) {
            var t = function(e) {
                return g.classList.toggle("close")
            };
            w(e = p(e), "click", function(e) {
                e.stopPropagation(), t()
            }), c && w(g, "click", function(e) {
                return g.classList.contains("close") && t()
            })
        }("button.sidebar-toggle", e.router), t = ".sidebar", e.router, w(t = p(t), "click", function(e) {
            var t = e.target;
            "A" === t.nodeName && t.nextSibling && t.nextSibling.classList.contains("app-sub-sidebar") && _(t.parentNode, "collapse")
        });
        var t;
        e.config.coverpage ? !c && w("scroll", ae) : g.classList.add("sticky")
    }

    function Fe(e, t, n, r, i, a) {
        e = a ? e : e.replace(/\/$/, ""), (e = V(e)) && P(i.router.getFile(e + n) + t, !1, i.config.requestHeaders).then(r, function(a) {
            return Fe(e, t, n, r, i)
        })
    }
    var Oe = Object.freeze({
        cached: e,
        hyphenate: t,
        hasOwn: n,
        merge: r,
        isPrimitive: i,
        noop: a,
        isFn: o,
        inBrowser: l,
        isMobile: c,
        supportsPushState: u,
        parseQuery: G,
        stringifyQuery: X,
        isAbsolutePath: Q,
        getParentPath: V,
        cleanPath: Z,
        getPath: J,
        replaceSlug: K
    });

    function Me() {
        this._init()
    }
    var Ne = Me.prototype;
    Ne._init = function() {
        this.config = function() {
            var e = r({
                    el: "#app",
                    repo: "",
                    maxLevel: 6,
                    subMaxLevel: 0,
                    loadSidebar: null,
                    loadNavbar: null,
                    homepage: "README.md",
                    coverpage: "",
                    basePath: "",
                    auto2top: !1,
                    name: "",
                    themeColor: "",
                    nameLink: window.location.pathname,
                    autoHeader: !1,
                    executeScript: null,
                    noEmoji: !1,
                    ga: "",
                    ext: ".md",
                    mergeNavbar: !1,
                    formatUpdated: "",
                    externalLinkTarget: "_blank",
                    routerMode: "hash",
                    noCompileLinks: []
                }, window.$docsify),
                a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).filter(function(e) {
                    return /docsify\./.test(e.src)
                })[0];
            if (a) {
                for (var o in e)
                    if (n.call(e, o)) {
                        var s = a.getAttribute("data-" + t(o));
                        i(s) && (e[o] = "" === s || s)
                    }!0 === e.loadSidebar && (e.loadSidebar = "_sidebar" + e.ext), !0 === e.loadNavbar && (e.loadNavbar = "_navbar" + e.ext), !0 === e.coverpage && (e.coverpage = "_coverpage" + e.ext), !0 === e.repo && (e.repo = ""), !0 === e.name && (e.name = "")
            }
            return window.$docsify = e, e
        }(), (e = this)._hooks = {}, e._lifecycle = {}, ["init", "mounted", "beforeEach", "afterEach", "doneEach", "ready"].forEach(function(t) {
            var n = e._hooks[t] = [];
            e._lifecycle[t] = function(e) {
                return n.push(e)
            }
        });
        var e;
        [].concat((a = this).config.plugins).forEach(function(e) {
            return o(e) && e(a._lifecycle, a)
        });
        var a;
        s(this, "init"),
            function(e) {
                var t, n = e.config;
                t = "history" === (n.routerMode || "hash") && u ? new Ae(n) : new Ee(n), e.router = t, Te(e), $e = e.route, t.onchange(function(t) {
                    Te(e), e._updateRender(), $e.path !== e.route.path ? (e.$fetch(), $e = e.route) : e.$resetEvents()
                })
            }(this), _e(this), Pe(this),
            function(e) {
                var t = e.config.loadSidebar;
                if (e.rendered) {
                    var n = oe(e.router, ".sidebar-nav", !0, !0);
                    t && n && (n.parentNode.innerHTML += window.__SUB_SIDEBAR__), e._bindEventOnRendered(n), e.$resetEvents(), s(e, "doneEach"), s(e, "ready")
                } else e.$fetch(function(t) {
                    return s(e, "ready")
                })
            }(this), s(this, "mounted")
    };
    Ne.route = {};
    (je = Ne)._renderTo = function(e, t, n) {
        var r = p(e);
        r && (r[n ? "outerHTML" : "innerHTML"] = t)
    }, je._renderSidebar = function(e) {
        var t = this.config,
            n = t.maxLevel,
            r = t.subMaxLevel,
            i = t.loadSidebar;
        this._renderTo(".sidebar-nav", this.compiler.sidebar(e, n));
        var a = oe(this.router, ".sidebar-nav", !0, !0);
        i && a ? a.parentNode.innerHTML += this.compiler.subSidebar(r) || "" : this.compiler.subSidebar(), this._bindEventOnRendered(a)
    }, je._bindEventOnRendered = function(e) {
        var t = this.config,
            n = t.autoHeader,
            r = t.auto2top;
        if (function(e) {
                var t = m(".cover.show");
                de = t ? t.offsetHeight : 0;
                for (var n = p(".sidebar"), r = v(n, "li"), i = 0, a = r.length; i < a; i += 1) {
                    var o = r[i],
                        s = o.querySelector("a");
                    if (s) {
                        var l = s.getAttribute("href");
                        if ("/" !== l) {
                            var u = e.parse(l),
                                h = u.query.id,
                                d = u.path;
                            h && (l = fe(d, h))
                        }
                        l && (ce[decodeURIComponent(l)] = o)
                    }
                }
                if (!c) {
                    var g = e.getCurrentPath();
                    x("scroll", function() {
                        return ge(g)
                    }), w("scroll", function() {
                        return ge(g)
                    }), w(n, "mouseover", function() {
                        ue = !0
                    }), w(n, "mouseleave", function() {
                        ue = !1
                    })
                }
            }(this.router), n && e) {
            var i = p("#main"),
                a = i.children[0];
            if (a && "H1" !== a.tagName) {
                var o = b("h1");
                o.innerText = e.innerText, k(i, o)
            }
        }
        r && (s = r, void 0 === s && (s = 0), ve.scrollTop = !0 === s ? 0 : Number(s));
        var s
    }, je._renderNav = function(e) {
        e && this._renderTo("nav", this.compiler.compile(e)), this.config.loadNavbar && oe(this.router, "nav")
    }, je._renderMain = function(e, t, n) {
        var r = this;
        if (void 0 === t && (t = {}), !e) return xe.call(this, e);
        s(this, "beforeEach", e, function(i) {
            var a, o = function() {
                t.updatedAt && (a = we(a, t.updatedAt, r.config.formatUpdated)), s(r, "afterEach", a, function(e) {
                    return xe.call(r, e)
                })
            };
            r.isHTML ? (a = r.result = e, o(), n()) : ye({
                compiler: r.compiler,
                raw: i
            }, function(e) {
                a = r.compiler.compile(e), o(), n()
            })
        })
    }, je._renderCover = function(e, t) {
        var n = p(".cover");
        if (_(p("main"), t ? "add" : "remove", "hidden"), e) {
            _(n, "add", "show");
            var r = this.coverIsHTML ? e : this.compiler.cover(e),
                i = r.trim().match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$');
            if (i) {
                if ("color" === i[2]) n.style.background = i[1] + (i[3] || "");
                else {
                    var a = i[1];
                    _(n, "add", "has-mask"), Q(i[1]) || (a = J(this.router.getBasePath(), i[1])), n.style.backgroundImage = "url(" + a + ")", n.style.backgroundSize = "cover", n.style.backgroundPosition = "center center"
                }
                r = r.replace(i[0], "")
            }
            this._renderTo(".cover-main", r), ae()
        } else _(n, "remove", "show")
    }, je._updateRender = function() {
        ! function(e) {
            var t = p(".app-name-link"),
                n = e.config.nameLink,
                r = e.route.path;
            if (t)
                if (i(e.config.nameLink)) t.setAttribute("href", n);
                else if ("object" == typeof n) {
                var a = Object.keys(n).filter(function(e) {
                    return r.indexOf(e) > -1
                })[0];
                t.setAttribute("href", n[a])
            }
        }(this)
    };
    var je;
    ! function(e) {
        var t, n = function(e, n, r) {
            return t && t.abort && t.abort(), t = P(e, !0, r)
        };
        e._loadSideAndNav = function(e, t, n, r) {
            var i = this;
            return function() {
                if (!n) return r();
                Fe(e, t, n, function(e) {
                    i._renderSidebar(e), r()
                }, i, !0)
            }
        }, e._fetch = function(e) {
            var t = this;
            void 0 === e && (e = a);
            var r = this.route,
                i = r.path,
                o = X(r.query, ["id"]),
                s = this.config,
                l = s.loadNavbar,
                c = s.requestHeaders,
                u = s.loadSidebar,
                h = this.router.getFile(i),
                p = n(h + o, 0, c);
            this.isHTML = /\.html$/g.test(h), p.then(function(n, r) {
                return t._renderMain(n, r, t._loadSideAndNav(i, o, u, e))
            }, function(n) {
                t._fetchFallbackPage(h, o, e) || t._fetch404(h, o, e)
            }), l && Fe(i, o, l, function(e) {
                return t._renderNav(e)
            }, this, !0)
        }, e._fetchCover = function() {
            var e = this,
                t = this.config,
                n = t.coverpage,
                r = t.requestHeaders,
                i = this.route.query,
                a = V(this.route.path);
            if (n) {
                var o = null,
                    s = this.route.path;
                if ("string" == typeof n) "/" === s && (o = n);
                else if (Array.isArray(n)) o = n.indexOf(s) > -1 && "_coverpage";
                else {
                    var l = n[s];
                    o = !0 === l ? "_coverpage" : l
                }
                var c = Boolean(o) && this.config.onlyCover;
                return o ? (o = this.router.getFile(a + o), this.coverIsHTML = /\.html$/g.test(o), P(o + X(i, ["id"]), !1, r).then(function(t) {
                    return e._renderCover(t, c)
                })) : this._renderCover(null, c), c
            }
        }, e.$fetch = function(e) {
            var t = this;
            void 0 === e && (e = a);
            var n = function() {
                s(t, "doneEach"), e()
            };
            this._fetchCover() ? n() : this._fetch(function() {
                t.$resetEvents(), n()
            })
        }, e._fetchFallbackPage = function(e, t, r) {
            var i = this;
            void 0 === r && (r = a);
            var o = this.config,
                s = o.requestHeaders,
                l = o.fallbackLanguages,
                c = o.loadSidebar;
            if (!l) return !1;
            var u = e.split("/")[1];
            if (-1 === l.indexOf(u)) return !1;
            var h = e.replace(new RegExp("^/" + u), "");
            return n(h + t, 0, s).then(function(n, a) {
                return i._renderMain(n, a, i._loadSideAndNav(e, t, c, r))
            }, function() {
                return i._fetch404(e, t, r)
            }), !0
        }, e._fetch404 = function(e, t, r) {
            var i = this;
            void 0 === r && (r = a);
            var o = this.config,
                s = o.loadSidebar,
                l = o.requestHeaders,
                c = o.notFoundPage,
                u = this._loadSideAndNav(e, t, s, r);
            if (c) {
                var h = function(e, t) {
                    var n, r, i = t.notFoundPage,
                        a = "_404" + (t.ext || ".md");
                    switch (typeof i) {
                        case "boolean":
                            r = a;
                            break;
                        case "string":
                            r = i;
                            break;
                        case "object":
                            r = (n = Object.keys(i).sort(function(e, t) {
                                return t.length - e.length
                            }).find(function(t) {
                                return e.match(new RegExp("^" + t))
                            })) && i[n] || a
                    }
                    return r
                }(e, this.config);
                return n(this.router.getFile(h), 0, l).then(function(e, t) {
                    return i._renderMain(e, t, u)
                }, function() {
                    return i._renderMain(null, {}, u)
                }), !0
            }
            return this._renderMain(null, {}, u), !1
        }
    }(Ne), Ne.$resetEvents = function() {
        me(this.route.path, this.route.query.id), this.config.loadNavbar && oe(this.router, "nav")
    };
    window.Docsify = {
            util: Oe,
            dom: S,
            get: P,
            slugify: U
        }, window.DocsifyCompiler = re, window.marked = R, window.Prism = q, Me.version = "4.7.0",
        function(e) {
            var t = document.readyState;
            if ("complete" === t || "interactive" === t) return setTimeout(e, 0);
            document.addEventListener("DOMContentLoaded", e)
        }(function(e) {
            return new Me
        })
}();