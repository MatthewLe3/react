import React, { useEffect, useCallback, useRef } from 'react'
import { message } from 'antd'
import styles from './index.less'

export default function MyButton() {

    const myIframe = useRef();

    const setIframe = useCallback(
        () => {
            var iframe = document.createElement("iframe");
            iframe.id = "btnIframe";
            iframe.src = "https://emilkowalski.github.io/css-effects-snippets/";
            iframe.frameBorder = "none";
            iframe.scrolling = "auto";
            iframe.height = "100%";
            iframe.width = "100%";
            if (iframe.attachEvent) {
                iframe.attachEvent("onload", function () {
                    setTimeout(hide, 500)
                });
            } else {
                iframe.onload = function () {
                    setTimeout(hide, 500)
                };
            }
            const hide = message.loading('加载中。。。', 0);
            myIframe.current.appendChild(iframe);
        },
        [],
    )

    const removeIframe = useCallback(
        () => {
            if(myIframe.current)
                myIframe.current.removeChild(document.getElementById('btnIframe'))
        },
        [],
    )

    useEffect(() => {
        setIframe()
        return () => {
            removeIframe()
        }
    }, [setIframe, removeIframe])
    return (
        <div className={styles.my_button_content} ref={myIframe}></div>
    )
}
