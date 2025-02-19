const heading = React.createElement('div', {id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{},"heading 1"),React.createElement('h1',{},"heading 2")]) );

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(heading);
console.log(root);

root.render(heading);