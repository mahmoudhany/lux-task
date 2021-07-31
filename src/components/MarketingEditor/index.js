import React, { useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import HTMLReactParser from 'html-react-parser';
import Preview from '../Preview';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import './marketingEditor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function MarketingEditor() {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );
  return (
    <di className='row py-4 marketing-editor'>
      <div className='left col-12 col-md-6 align-self-md-center'>
        <div className="title">
          <h3>Customisation</h3>
          <p>The text will reflect mobile view</p>
        </div>
        <div>
          <Editor
            editorState={editorState}
            wrapperClassName="editor"
            onEditorStateChange={setEditorState}
            placeholder='Start typing your aritcle'
          />
        </div>
        <button className="btn btn-primary">
          <span>Publish</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <Preview
        content={HTMLReactParser(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
      />
    </di>
  )
}
