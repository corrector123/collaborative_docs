import { imeHandler } from '../util/imeHandler';
import { nextTick } from 'vue';

export const ime = {
    mounted(el, binding) {
        // 添加输入法事件监听
        imeHandler.addIMEListeners(el);

        // 监听自定义事件
        el.addEventListener('ime-complete', async (event) => {
            if (binding.value && typeof binding.value === 'function') {
                // 直接更新值
                el.value = event.detail.value;
                await nextTick();
                binding.value(event.detail.value);
            }
        });

        el.addEventListener('ime-input', async (event) => {
            if (binding.value && typeof binding.value === 'function') {
                // 直接更新值
                el.value = event.detail.value;
                await nextTick();
                binding.value(event.detail.value);
            }
        });

        // 监听文本变化事件
        el.addEventListener('ime-text-change', async (event) => {
            if (binding.value && typeof binding.value === 'function') {
                await nextTick();
                binding.value(event.detail.value);
            }
        });

        // 添加blur事件处理
        el.addEventListener('blur', async () => {
            if (binding.value && typeof binding.value === 'function') {
                await nextTick();
                binding.value(el.value);
            }
        });
    },

    updated(el, binding) {
        // 更新时重新设置初始值
        imeHandler.lastValue = el.value;
    },

    beforeUnmount(el) {
        // 移除输入法事件监听
        imeHandler.removeIMEListeners(el);
    }
}; 