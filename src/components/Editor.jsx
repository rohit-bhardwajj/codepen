import React from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {controlled as ControlledEditor} from 'react-codemirror2'
import { handle } from 'express/lib/application';
import { linkClasses } from '@mui/material';


function Editor({dispayName}) {
  return (
    <div className='editor-container'>
        <div className='editor-title'>
        {dispayName}
        <button>O/C</button>
        </div>
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
            lineWrapper:true,
            lint:true,
            mode
        }}
        />
    </div>
  )
}

export default Editor