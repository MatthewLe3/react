import React, { useState, useRef } from 'react'
import styles from './index.less'
import { Editor } from '@tinymce/tinymce-react';

export default function Tinymec() {
    // https://www.tiny.cloud/my-account/onboarding/
    // https://juejin.cn/post/6844904113579229198
    // http://tinymce.ax-z.cn/general/localize-your-language.php
    const [content, setContent] = useState('中文文档：http://tinymce.ax-z.cn/general/localize-your-language.php')
    const tinyEditor = useRef(null)

    const handleEditorChange = (content, editor) => {
        setContent(content)
    }

    const editorObj = {
        height: '500',
        language:'zh_CN',//注意大小写
        plugins: 'table lists image',
        // toolbar: `newdocument | bold  italic  underline  strikethrough | alignleft  aligncenter alignright alignjustify | styleselect 
        // formatselect  fontselect fontsizeselect | cut  copy  paste | bullist
        //  numlist | outdent indent | blockquote | undo | redo | removeformat | subscript  superscript`,
        file_picker_types: 'image',
        // automatic_uploads={false}        
        images_upload_url: '',
        image_uploadtab: true,
    }

    return (
        <div className={styles.tiny}>
            <div className={styles.content}>
                <Editor
                    apiKey="l1y04t7q8lwzc36xejfk2g5qx2i0gc00bjrp4zk7pr4iz5tq"
                    inline={false}
                    selector='editorStateRef'
                    ref={tinyEditor}
                    value={content}
                    onEditorChange={handleEditorChange}
                    init={editorObj} />
            </div>
        </div>
    )
}
