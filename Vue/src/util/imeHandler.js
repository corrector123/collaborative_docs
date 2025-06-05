class IMEHandler {
    constructor() {
        this.isComposing = false;
        this.originalValue = '';
        this.observer = null;
    }

    // 处理输入法开始事件
    handleCompositionStart(event) {
        this.isComposing = true;
        this.originalValue = event.target.value;
    }

    // 处理输入法结束事件
    handleCompositionEnd(event) {
        this.isComposing = false;
        const finalValue = event.target.value;
        
        // 触发自定义事件，传递最终的中文输入值
        const customEvent = new CustomEvent('ime-complete', {
            detail: {
                value: finalValue
            }
        });
        event.target.dispatchEvent(customEvent);
    }

    // 处理输入事件
    handleInput(event) {
        // 如果正在输入法编辑中，不处理输入事件
        if (this.isComposing) {
            return;
        }

        // 触发自定义事件，传递输入值
        const customEvent = new CustomEvent('ime-input', {
            detail: {
                value: event.target.value
            }
        });
        event.target.dispatchEvent(customEvent);
    }

    // 为元素添加输入法事件监听
    addIMEListeners(element) {
        // 移除可能存在的旧事件监听器
        this.removeIMEListeners(element);
        
        // 添加新的事件监听器
        element.addEventListener('compositionstart', this.handleCompositionStart.bind(this));
        element.addEventListener('compositionend', this.handleCompositionEnd.bind(this));
        element.addEventListener('input', this.handleInput.bind(this));

        // 使用 MutationObserver 监听元素变化
        this.observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    // 处理子节点变化
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            // 处理文本节点变化
                            const customEvent = new CustomEvent('ime-text-change', {
                                detail: {
                                    value: node.textContent
                                }
                            });
                            element.dispatchEvent(customEvent);
                        }
                    });
                }
            });
        });

        // 配置观察选项
        const config = {
            childList: true, // 观察子节点的添加或删除
            characterData: true, // 观察文本内容的变化
            subtree: true // 观察所有后代节点
        };

        // 开始观察
        this.observer.observe(element, config);
    }

    // 移除输入法事件监听
    removeIMEListeners(element) {
        element.removeEventListener('compositionstart', this.handleCompositionStart.bind(this));
        element.removeEventListener('compositionend', this.handleCompositionEnd.bind(this));
        element.removeEventListener('input', this.handleInput.bind(this));

        // 停止观察
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    }
}

export const imeHandler = new IMEHandler();