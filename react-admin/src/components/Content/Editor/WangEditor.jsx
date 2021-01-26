import React, {  useEffect, useRef } from 'react'
import styles from './index.less'
import E from 'wangeditor'

export default function WangEditor() {

    const editorElemBody = useRef(null)

    useEffect(() => {
        console.log('editorElemBody', editorElemBody)
        let editor = new E(editorElemBody.current)

        //使用 onchange 函数监听内容的变化
        editor.config.onchange = html => {
            console.log('html', html)
        }

        editor.config.onblur = newHtml => {
            console.log('onblur', newHtml) // 获取最新的 html 内容
        }
        editor.config.onfocus = newHtml => {
            console.log('onfocus', newHtml) // 获取最新的 html 内容
        }

        // 插入网络图片的回调
        editor.config.linkImgCallback = src => {
            console.log('图片 src ', src)
        }

        // 自定义检查插入视频的回调
        editor.config.onlineVideoCallback = video => {
            // 自定义回调内容，内容成功插入后会执行该函数
            console.log('插入视频内容', video)
        }

        editor.config.uploadImgShowBase64 = true

        editor.config.placeholder = '自定义 placeholder 提示文字'
        
        editor.config.height = 500 //设置高度
        editor.create()
        return () => {
            editor.destroy()
        }
    }, [])

    return (
        <div className={styles.wang_editor}>
            <div className={styles.content}>
                <div className={styles.shop}>
                    <div className={styles.textarea} >
                        <div ref={editorElemBody} className={styles.editorElemBody}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
