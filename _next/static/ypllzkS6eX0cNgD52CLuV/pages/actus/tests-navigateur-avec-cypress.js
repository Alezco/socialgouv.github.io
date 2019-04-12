(window.webpackJsonp=window.webpackJsonp||[]).push([["16f8"],{"E/Ix":function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a("q1tI"),s=a.n(n),r=s.a.createContext({}),c=function(e){var t=s.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l="mdxType",o={inlineCode:"code",wrapper:s.a.Fragment},i=function(e){var t=e.components,a=e.mdxType,n=e.originalType,r=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),i=c(t);return s.a.createElement(i[r+"."+a]||i[a]||o[a]||n,l)};function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=i;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:n,c[1]=o;for(var u=2;u<r;u++)c[u]=a[u];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"},OrIB:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/actus/tests-navigateur-avec-cypress",function(){var e=a("Phl6");return{page:e.default||e}}])},Phl6:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",function(){return l}),a.d(t,"default",function(){return p});var n=a("kOwS"),s=a("qNsG"),r=(a("q1tI"),a("E/Ix")),c=a("tKWW"),l={title:"Tests de navigateur automatisés avec cypress.io",hero:{background:"/static/images/actus/cypress.io/tim-foster-242021-unsplash.jpg",alt:"Photo by Tim Foster"}},o={meta:l},i="wrapper";function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.a)(i,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)(c.l,{meta:l,mdxType:"LayoutArticle"},Object(r.a)("h1",null,'Automatisation des tests navigateurs ("e2e")'),Object(r.a)("p",null,"Que ce soit pour ",Object(r.a)("strong",{parentName:"p"},"empêcher les régressions")," fonctionnelles, tester de nouvelles implémentations ou ",Object(r.a)("strong",{parentName:"p"},"gagner du temps en recette"),", les tests automatisés sont un outil précieux pour fiabiliser les applications web."),Object(r.a)("p",null,"Ce type de test, ",Object(r.a)("strong",{parentName:"p"},"en complément des code reviews et des tests unitaires"),", permet de detecter les bugs le plus tôt possible, avant qu'ils n'atteignent la production, ce qui offre potentiellement un meilleur service aux usagers tout en permettant des économies sur les coûts des correctifs."),Object(r.a)("p",null,"En effet, le coût de correction d'un bug augmente de manière exponentielle avec le temps."),Object(r.a)("br",null),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"/static/images/actus/cypress.io/defect-costs.jpg",alt:"le coût des bugs"}))),Object(r.a)("br",null),Object(r.a)("p",null,"En plus de fiabiliser une application, ce type de test offre d'autres vertues : augmenter la confiance technique, et ainsi permettre aux développeurs(ses) de pouvoir refactorer le code ",Object(r.a)("strong",{parentName:"p"},"sans avoir peur de casser quelque chose"),"."),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"La maintenance n'est pas un problème mais une solution  ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"http://twitter.com/f_leguedois",title:"@f_leguedois"}),"©"))),Object(r.a)("p",null,"Cette maintenance préventive, toujours nécessaire mais trop souvent mise de côté, permet d'allonger la durée de vie des applications en maintenant un niveau de qualité élevé, ce qui permettra de mieux absorber les changements inévitables de tout projet numérique."),Object(r.a)("h2",null,"cypress.io"),Object(r.a)("p",null,"Dans cet article, nous vous présentons ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"http://cypress.io"}),"cypress.io"),", un outil open-source qui permet de piloter les navigateurs web Chrome/Canary/Chromium, d'executer des scénarios complexes, de faire des mesures, et de remonter les anomalies."),Object(r.a)("p",null,"L'outil peut-être utilisé en local, pendant le développement ou la recette, ou sur une infrastructure dédiée, dans le cadre de l'intégration continue : chaque changement sur le code redéclenche alors touts les tests avant un éventuel déploiement."),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"⚠️ Contrairement à d'autres solutions comme ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.seleniumhq.org/"}),"Selenium")," ou ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://saucelabs.com"}),"SauceLabs"),", Cypress ne fonctionne qu'avec des navigateurs à base de Chromium.")),Object(r.a)("h3",null,"Donc pourquoi utiliser cypress.io ?"),Object(r.a)("p",null,"Cypress permet de coder vos scénarios en JavaScript, un language accessible à tous et est ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cypress-io/cypress/"}),"disponible sur GitHub")," avec une grande communauté et une ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.cypress.io/"}),"très bonne documentation"),"."),Object(r.a)("p",null,"Cypress donne également accès à la couche réseau du navigateur et permet de faire des captures d'écran ou vidéo des séquences de test."),Object(r.a)("p",null,"L'experience utilisateur lors de la création des tests est bluffante, l'",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.cypress.io/api/introduction/api.html"}),"API très complète")," et de nombreux détails ont été pensés pour permettre d'écrire et d'executer les tests très rapidement. ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/search?q=%23LittleBigDetails"}),"#LittleBigDetails")),Object(r.a)("p",null,"Démo en 2 minutes :"),Object(r.a)("iframe",{src:"https://player.vimeo.com/video/237527670?title=0&byline=0&portrait=0",width:"640",height:"360",frameBorder:"0",webkitAllowFullscreen:!0,mozAllowFullscreen:!0,allowFullScreen:!0}),Object(r.a)("h2",null,"Mise en oeuvre"),Object(r.a)("p",null,"Pour démarrer, le plus simple est d'utiliser l'installeur officiel sur ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.cypress.io/"}),"cypress.io"),"."),Object(r.a)("p",null,"Vous devez installer NodeJS et npm sur votre poste et ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.cypress.io/guides/getting-started/installing-cypress.html"}),"suivre le quickstart"),"."),Object(r.a)("p",null,"Dans votre projet, créez un fichier dans ",Object(r.a)("inlineCode",{parentName:"p"},"./cypress/integration/test1.spec.js"),"."),Object(r.a)("p",null,"Coller le code suivant, c'est un exemple de base pour démarrer."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"hljs language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// exemple simpliste de test navigateur"),"\ndescribe(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"L\'utilisateur peut accéder à une convention collective"'),", () => {\n  it.only(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"Recherche de la CCN #843"'),", () => {\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// va sur la page de recherche legifrance"),"\n    cy.visit(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"http://www.legifrance.gouv.fr/initRechConvColl.do"'),");\n\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),'//remplis le champ "IDCC" avec "843"'),"\n    cy.get(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"#champ3"'),").type(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"843"'),");\n\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// lances la recherche"),"\n    cy.get(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),"'input[value=\"Rechercher\"]'"),").click();\n\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// vérifies qu'on a bien un résultat"),"\n    cy.get(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"li.resultat1"'),").should(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"have.length"'),", ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-number"}),"1"),");\n\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// visite l'url du lien trouvé"),"\n    cy\n      .get(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"li.resultat1 a"'),")\n      .then(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-function"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-params"}),"node")," =>")," cy.visit(node[",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-number"}),"0"),"].href))\n      ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-comment"}),"// verifies qu'on a 178 liens (annexes)"),"\n      .then(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-function"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"hljs-params"}),"()")," =>")," cy.get(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"ul.lien_texte li"'),").should(",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-string"}),'"have.length"'),", ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"hljs-number"}),"178"),"))\n\n});")),Object(r.a)("p",null,"Comme vous pouvez le voir, on se base sur les ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/fr/docs/Web/CSS/S%C3%A9lecteurs_CSS"}),"selecteurs CSS")," pour cibler précisément les éléments de la page à tester. L'",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.cypress.io/api/introduction/api.html"}),"API de cypress")," permet ensuite de déclencher des actions comme ",Object(r.a)("inlineCode",{parentName:"p"},"visit()"),", ",Object(r.a)("inlineCode",{parentName:"p"},"type()"),", ",Object(r.a)("inlineCode",{parentName:"p"},"click()")," et de définir des assertions(",Object(r.a)("inlineCode",{parentName:"p"},"should"),") qui définissent les conditions de validité de notre test."),Object(r.a)("p",null,"Ensuite, depuis le repertoire de votre projet, lancez ",Object(r.a)("inlineCode",{parentName:"p"},"./node_modules/.bin/cypress open")),Object(r.a)("p",null,"Les tests vont alors s'executer dans une fenêtre Chrome dédiée :"),Object(r.a)("p",null,Object(r.a)("img",Object(n.a)({parentName:"p"},{src:"/static/images/actus/cypress.io/screenshot-legifrance.jpg",alt:"cypress en action"}))),Object(r.a)("p",null,"Cette interface permet de vérifier le bon déroulement des tests et la validité des selecteurs CSS. Dès que vous modifiez un test, il se relancera automatiquement."),Object(r.a)("p",null,"Complétez ensuite votre suite de test pour couvrir les scénarios critiques de votre application."),Object(r.a)("h2",null,"Industrialisation"),Object(r.a)("p",null,"Une fois vos tests opérationnels, vous pouvez les intégrer dans une chaine d'intégration continue, avec CircleCI, travis, ou GitLab CI par exemple. Chaque modification sur le projet entrainera alors automatiquement l'execution des tests."),Object(r.a)("p",null,"Cette automatisation entraine d'autre problématiques : nos tests doivent tourner dans un environnement prédictible, et si notre application fait appel à une API et une base de données, alors nous devons être capable soit de restaurer à la demande des jeux de données de test (les ",Object(r.a)("inlineCode",{parentName:"p"},"fixtures"),"), soit de ",Object(r.a)("inlineCode",{parentName:"p"},"stubber")," (intercepter) les requêtes API pour les remplacer par des données de test."),Object(r.a)("p",null,"C'est au prix de cet effort d'automatisation qui rammène de la confiance que nous pourrons rendre nos applications replicables, aller vers des ",Object(r.a)("strong",{parentName:"p"},"processus DevOps")," et avoir le sérénité nécessaire pour faire du déploiement continu."),Object(r.a)("h2",null,"Astuces"),Object(r.a)("p",null,"[todo]"),Object(r.a)("h2",null,"Conclusion"),Object(r.a)("p",null,"[todo]")))}p.isMDXComponent=!0},qNsG:function(e,t,a){"use strict";var n=a("4mXO"),s=a.n(n),r=a("pLtp"),c=a.n(r);function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,s={},r=c()(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(s.a){var l=s()(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",function(){return l})}},[["OrIB","5d41","9da1"]]]);