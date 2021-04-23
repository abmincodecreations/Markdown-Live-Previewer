import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


let marked = require("marked");
const initialTextState= `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://abmincodecreations.github.io/random_quote_generator-/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K) `;
class App extends React.Component{
  state={
     text:initialTextState
  }

  handleChange=(e)=>{
    this.setState(
      {
        text:e.target.value
      }
    )
  }
  render(){
    const {text}=this.state;
    
    const markdown=marked(text ,{breaks:true});
    return (
    <div>
      <div className='nav-bar'>
     <h1 className="text-center mt-1" >Markdown Live Previewer</h1>
      </div>
     <hr></hr>
      <div className='row d-flex flex-column flex-sm-row  flex-md-row flex-xl-row flex-lg-row '>
             <div className="col-6">
               <h6>Enter markdown:</h6>
               <textarea id="editor" className="form-control textAreaBox" value={text} onChange={
                 this.handleChange}>
                </textarea>
             </div>
            <div className="col-6" id="previewer">
             <h6>Output:</h6>
               <div className="preview rounded" dangerouslySetInnerHTML={{__html:markdown}} id="preview"/>
             </div>
         </div>      


        <div className='footer-bar mt-4'>
          <p className="footertext">
            <a className="no-decoration" href="https://github.com/abmincodecreations">
              &copy;Designed & developed By Abhishek Mishra
            </a>
          </p>
        </div>
    </div>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));



