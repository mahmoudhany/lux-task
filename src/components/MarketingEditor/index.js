import React, { useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import HTMLReactParser from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Preview from '../Preview';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import './marketingEditor.css';


export default function MarketingEditor() {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );
  const [option, setOption] = useState("Text");

  return (
    <div className='row py-4 marketing-editor'>
      <div className='left col-12 col-md-6 align-self-md-center'>
        <div className="title">
          <h3>Customisation</h3>
          <p>The text will reflect mobile view</p>
        </div>
        <div>
          <select
            className="select-text col-12"
            onChange={(event) => {
              setOption(event.target.value);
            }}>
            <option value="Text">Text</option>
            <option value="Text 1">Text 1</option>
          </select>
        </div>
        <div>
          <Editor
            editorState={editorState}
            wrapperClassName="editor"
            editorClassName='editor-textarea'
            onEditorStateChange={setEditorState}
            placeholder='Start typing your aritcle'
          />
        </div>
        <button className="btn btn-primary" onClick={() => alert('Published successfully')}>
          <span>Publish</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <Preview
        title={option}
        content={HTMLReactParser(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
      />
    </div>
  )
}
