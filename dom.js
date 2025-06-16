const topicList= document.getElementById('topic-list');
const li =document.createElement('li');
li.innerText='dom practice';
topicList.append(li);


const mainContent =document.getElementById('main-content');
const section= document.createElement('section')
const h1= document.createElement('h1')
h1.innerText='my food list';
section.appendChild(h1);

const ul= document.createElement('ul')
const li1= document.createElement('li')
li1.innerText='pizza';
ul.appendChild(li1);

const li2= document.createElement('li')
li2.innerText='burger';
ul.appendChild(li2);

const li3= document.createElement('li')
li3.innerText='milkshake';
ul.appendChild(li3);

section.appendChild(ul);

mainContent.appendChild(section)


const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
 <h1>my dress</h1>
 <ul id="dress-list">
            <li>dom</li>
            <li>dom-manipulation</li>
            <li>dom-switch</li>
        </ul>
`
mainContent.appendChild(sectionDress)