(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[606],{3878:function(e,n,t){"use strict";t.d(n,{r:function(){return o}});var i=t(7294),a="icon_1PGw",l=t(9205),o=function(e){return i.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},i.createElement("div",{className:a},i.createElement(l.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,n,t){"use strict";t.d(n,{M:function(){return r}});var i=t(7294),a=t(9205),l="titleOffset_2I3u",o="iconContainer_1xRA",r=function(e){var n=e.title?i.createElement("div",{className:"card__header"},i.createElement("span",{className:o},e.icon&&i.createElement(a.A,{icon:e.icon,link:e.link,active:"true"})),i.createElement("h3",{className:e.icon&&l},e.title)):"";return i.createElement("div",{className:"card-demo",style:{margin:"2rem"}},i.createElement("div",{className:"card"},n,i.createElement("div",{className:"card__body"},i.createElement("p",null," ",e.children," "))))}},9205:function(e,n,t){"use strict";t.d(n,{A:function(){return c}});var i=t(7294),a="hidden_2JtY",l="iconContainer_2Rnc",o="visible_2147",r="link_Lh4h",s="clickable_3vcc",c=function(e){var n=" "+(e.active?o:a),t=r+" "+(e.link&&s);return i.createElement("div",{className:l+n},i.createElement("a",{href:e.link,className:t},e.icon||"\ud83d\ude80"))}},6649:function(e,n,t){"use strict";t.d(n,{x:function(){return l}});var i=t(7294),a="threeScene_3QXR",l=function(e){return i.createElement("iframe",{className:a,width:"100%",height:"300",key:Math.random(),src:e.link,frameBorder:"0"})}},9860:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},metadata:function(){return h},toc:function(){return p},default:function(){return m}});var i=t(2122),a=t(9756),l=(t(7294),t(3905)),o=t(983),r=t(3878),s=t(6649),c=["components"],d={title:"Hello world",sidebar_position:2},h={unversionedId:"Hello world",id:"Hello world",isDocsHomePage:!1,title:"Hello world",description:"Introduction",source:"@site/docs/Hello world.mdx",sourceDirName:".",slug:"/Hello world",permalink:"/info/docs/Hello world",version:"current",sidebarPosition:2,frontMatter:{title:"Hello world",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/info/docs/Introduction"},next:{title:"Getting started",permalink:"/info/docs/Guide/Getting started"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Setting up the project",id:"setting-up-the-project",children:[{value:"Install libraries",id:"install-libraries",children:[]},{value:"Adding style",id:"adding-style",children:[]},{value:"Bundling",id:"bundling",children:[]},{value:"WebAssembly",id:"webassembly",children:[]}]},{value:"Setting up a 3D scene",id:"setting-up-a-3d-scene",children:[]},{value:"Loading IFC files",id:"loading-ifc-files",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"  \u26a1\nCreating a BIM application with IFC.js is very easy. You can find the complete project of the guide ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/hello-world/tree/main/scenes/helloworld"},"here")," and the deployed application ",(0,l.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/hello-world/scenes/helloworld/"},"here"),". You only need to have ",(0,l.kt)("a",{href:"https://nodejs.org/en/"},"Node.js")," and any IDE installed to follow the steps below. Also, if you don't have any IFC files to follow along, you can get some ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/test-ifc-files"},"here"),"."),(0,l.kt)(r.r,{mdxType:"IfcAlert"},"Using IFC.js requires a basic knowledge of web development (HTML, CSS, JavaScript) and Three.js. If you have no previous experience with Three.js, you should probably look ",(0,l.kt)("a",{href:"https://threejsfundamentals.org/"},"here"),"."),(0,l.kt)("p",null,"  \ud83d\udc23\nThis minimal tutorial will be done with Vanilla JavaScript, without using frameworks like React, Vue, Angular, Svelte, etc. However, the same steps can be adapted and applied to any of these use cases."),(0,l.kt)("h2",{id:"setting-up-the-project"},"Setting up the project"),(0,l.kt)("h3",{id:"install-libraries"},"Install libraries"),(0,l.kt)("p",null,"  \ud83d\udc69\u200d\ud83c\udfeb\nThe first thing to do is to create an empty folder and start a new npm project with the command ",(0,l.kt)("inlineCode",{parentName:"p"},"npm init"),". This will generate a ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file containing some data such as the project name, version, commands and dependencies. In addition, the following dependencies must be installed with npm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"    //Install IFC.js\n    npm i web-ifc-three\n\n    // Install Three.js\n    npm i three\n\n    // Install a bundler: we will use rollup.js for this guide\n    npm i rollup --save-dev\n    npm i @rollup/plugin-node-resolve --save-dev\n")),(0,l.kt)("p",null,"  \ud83d\udcdd\nThe next step is to create an HTML file named ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," as the main document of the application. The HTML will have:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("strong",{parentName:"li"},"canvas element"),", used to render the Three.js scene."),(0,l.kt)("li",{parentName:"ul"},"An ",(0,l.kt)("strong",{parentName:"li"},"input element"),", which will open IFC files from our computer to the application."),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("strong",{parentName:"li"},"script")," referencing a file called ",(0,l.kt)("inlineCode",{parentName:"li"},"bundle.js"),", which is the bundle of the app that we will produce with rollup.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="stylesheet" href="styles.css" />\n    <title>Document</title>\n  </head>\n  <body>\n    <input type="file" name="load" id="file-input" />\n    <canvas id="three-canvas"></canvas>\n    <script src="bundle.js"><\/script>\n  </body>\n</html>\n')),(0,l.kt)("h3",{id:"adding-style"},"Adding style"),(0,l.kt)("p",null,"  \ud83c\udfa8\nThe following CSS file will make the canvas full screen:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  overflow: hidden;\n}\n\n#three-canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  outline: none;\n}\n\n#file-input {\n  z-index: 1;\n  position: absolute;\n}\n")),(0,l.kt)("h3",{id:"bundling"},"Bundling"),(0,l.kt)("p",null,"Next, we'll create the rollup configuration file. This file has to be called ",(0,l.kt)("inlineCode",{parentName:"p"},"rollup.config.js")," and includes the reference to the plugins we have previously installed."),(0,l.kt)(o.M,{icon:"\ud83e\uddfb",title:"Rollup?",mdxType:"IfcCard"},"Rollup is a very popular bundling library. For instance, it's the bundler used by Three.js. Take a look at the ",(0,l.kt)("a",{href:"https://rollupjs.org/guide/en/"},"rollup docs")," to learn more."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import resolve from '@rollup/plugin-node-resolve';\n\nexport default {\n  input: 'src/app.js',\n  output: [\n    {\n      format: 'esm',\n      file: 'src/bundle.js'\n    },\n  ],\n  plugins: [\n    resolve(),\n  ]\n};\n")),(0,l.kt)("p",null,"  \ud83c\udfaf\nAlso, the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file needs to be modified to contain the commands to control rollup easily. In each command, you'll have to specify the relative path to your rollup configuration file. If we have installed everything correctly, we should see the same dependencies in this file (the version of the libraries may differ)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"npm run build")," will bundle the project and create a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle.js")," in the root directory of the project.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"npm run watch")," will activate the ",(0,l.kt)("inlineCode",{parentName:"p"},"watch mode"),", updating that file automatically every time we make changes to the code and save it."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "name": "example",\n  "version": "1.0.0",\n  "description": "-",\n  "main": "app.js",\n  "scripts": {\n    "build": "rollup -c ./rollup.config.js",\n    "watch": "rollup -w -c ./rollup.config.js"\n  },\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "@rollup/plugin-node-resolve": "^11.2.1",\n    "rollup": "^2.45.2"\n  },\n  "dependencies": {\n    "three": "^0.128.0",\n    "web-ifc-three": "0.0.32"\n  }\n}\n')),(0,l.kt)("h3",{id:"webassembly"},"WebAssembly"),(0,l.kt)("p",null,"  \ud83d\udcc1\nThe next thing to do is to copy the ",(0,l.kt)("inlineCode",{parentName:"p"},"web-ifc.wasm")," file to a directory in your project. It can be found in ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules\\three\\examples\\jsm\\loaders\\ifc"),". We can copy it wherever we want; in this example, it will be copied to a folder called wasm in the root directory of the project."),(0,l.kt)("p",null,"This file is necessary because it contains the compiled C++ logic of ",(0,l.kt)("a",{href:"https://github.com/IFCjs/web-ifc"},"web-ifc"),", which is the parsing core to read and write IFC files with native speed"),(0,l.kt)(r.r,{mdxType:"IfcAlert"},"This file has to be served statically in your application. This might need different tweaks if you are using frameworks or libraries like React, Angular, Vue or Svelte."),(0,l.kt)("h2",{id:"setting-up-a-3d-scene"},"Setting up a 3D scene"),(0,l.kt)("p",null,"Finally, we are going to create the JavaScript file to write the code for our application. This file can be located anywhere and have any name, but you must reflect this in the ",(0,l.kt)("inlineCode",{parentName:"p"},"rollup.config.js"),"."),(0,l.kt)("p",null,"  \ud83e\uddf1\nWe are going to create a basic 3D scene using Three.js."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  import {\n    AmbientLight,\n    AxesHelper,\n    DirectionalLight,\n    GridHelper,\n    PerspectiveCamera,\n    Scene,\n    WebGLRenderer,\n  } from "three";\n  import {\n      OrbitControls\n  } from "three/examples/jsm/controls/OrbitControls";\n\n  //Creates the Three.js scene\n  const scene = new Scene();\n\n  //Object to store the size of the viewport\n  const size = {\n    width: window.innerWidth,\n    height: window.innerHeight,\n  };\n\n  //Creates the camera (point of view of the user)\n  const aspect = size.width / size.height;\n  const camera = new PerspectiveCamera(75, aspect);\n  camera.position.z = 15;\n  camera.position.y = 13;\n  camera.position.x = 8;\n\n  //Creates the lights of the scene\n  const lightColor = 0xffffff;\n\n  const ambientLight = new AmbientLight(lightColor, 0.5);\n  scene.add(ambientLight);\n\n  const directionalLight = new DirectionalLight(lightColor, 1);\n  directionalLight.position.set(0, 10, 0);\n  directionalLight.target.position.set(-5, 0, 0);\n  scene.add(directionalLight);\n  scene.add(directionalLight.target);\n\n  //Sets up the renderer, fetching the canvas of the HTML\n  const threeCanvas = document.getElementById("three-canvas");\n  const renderer = new WebGLRenderer({\n      canvas: threeCanvas,\n      alpha: true\n  });\n\n  renderer.setSize(size.width, size.height);\n  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n\n  //Creates grids and axes in the scene\n  const grid = new GridHelper(50, 30);\n  scene.add(grid);\n\n  const axes = new AxesHelper();\n  axes.material.depthTest = false;\n  axes.renderOrder = 1;\n  scene.add(axes);\n\n  //Creates the orbit controls (to navigate the scene)\n  const controls = new OrbitControls(camera, threeCanvas);\n  controls.enableDamping = true;\n  controls.target.set(-2, 0, 0);\n\n  //Animation loop\n  const animate = () => {\n    controls.update();\n    renderer.render(scene, camera);\n    requestAnimationFrame(animate);\n  };\n\n  animate();\n\n  //Adjust the viewport to the size of the browser\n  window.addEventListener("resize", () => {\n    size.width = window.innerWidth;\n    size.height = window.innerHeight;\n    camera.aspect = size.width / size.height;\n    camera.updateProjectionMatrix();\n    renderer.setSize(size.width, size.height);\n  });\n')),(0,l.kt)("p",null,"  \ud83c\udf0f\nTo run the application locally we will need a local server. If you are using VS Code as IDE, one option is to install the ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"Live Server extension"),", which allows us to open an instance of Google Chrome, run our web application and see the changes we make to the code in real-time."),(0,l.kt)("h2",{id:"loading-ifc-files"},"Loading IFC files"),(0,l.kt)("p",null,"  \ud83c\udfe0\nFinally, we will use IFC.js to load IFC files. This can be done by instantiating the loader and creating an event for when the user uploads an IFC file to the HTML input element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  import { IFCLoader } from "web-ifc-three/IFCLoader";\n\n  // Sets up the IFC loading\n  const ifcLoader = new IFCLoader();\n\n  const input = document.getElementById("file-input");\n  input.addEventListener(\n    "change",\n    (changed) => {\n      var ifcURL = URL.createObjectURL(changed.target.files[0]);\n      ifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n    },\n    false\n  );\n')),(0,l.kt)("p",null,"  \ud83c\udfa3\nKeep in mind that if you haven't saved the file ",(0,l.kt)("inlineCode",{parentName:"p"},"web-ifc.wasm")," in the root of the project, you'll need to specify its location with ",(0,l.kt)("inlineCode",{parentName:"p"},"setWasmPath"),". For instance, if we had store ",(0,l.kt)("inlineCode",{parentName:"p"},"web-ifc.wasm")," in a folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"wasm")," contained in a folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"static")," in the root of the project, we would do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  ifcLoader.ifcManager.setWasmPath("static/wasm/");\n')),(0,l.kt)(s.x,{link:"https://ifcjs.github.io/hello-world/scenes/helloworld/",mdxType:"Scene"}),(0,l.kt)("p",null,"If you have done everything correctly, you should be able to see something similar to ",(0,l.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/hello-world/scenes/helloworld/"},"this")," in your local server. From here, the possibilities are endless."),(0,l.kt)(o.M,{icon:"\ud83d\udd25",title:"What else can I do with IFC.js?",mdxType:"IfcCard"},"This is just the beginning. You can take a look at ",(0,l.kt)("a",{href:"https://github.com/IFCjs/web-ifc-viewer"},"web-ifc-viewer"),", which includes tools for object selection, changing geometry appearance, section planes and much more. You can try it ",(0,l.kt)("a",{href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"here"),"."),(0,l.kt)("p",null,"  \ud83c\udf89\nCongratulations! You have just created your first IFC viewer. Go to the next pages of the docs to find out what else can you do with IFC.js."))}m.isMDXComponent=!0}}]);