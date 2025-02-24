import React from 'react';
import ReactDOM from 'react-dom/client'
// core way to write react element
// const heading = React.createElement('div', {id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{},"heading 1"),React.createElement('h1',{},"heading 2")]) );

//Jsx element
// const jsxHeading=<h1>jsxHeading</h1>

const Title=()=>{
    return <h1>Component Composition</h1>
}
const HeadingComponent=()=>{
return <div>
    <Title/>
<h1>jsxHeadingHeadingComponent</h1>
</div> 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(jsxHeading);
console.log(root);

root.render(<HeadingComponent/>);