export const doubleClickZoom = {
    enable(mode) {
        setTimeout(() => {
            // First check we've got a map and some context.
            if (!mode.map ||
                !mode.map.doubleClickZoom ||
                !mode._ctx ||
                !mode._ctx.store ||
                !mode._ctx.store.getInitialConfigValue) {
                return;
            }
            // Now check initial state wasn't false (we leave it disabled if so)
            if (!mode._ctx.store.getInitialConfigValue("doubleClickZoom"))
                return;
            mode.map.doubleClickZoom.enable();
        }, 0);
    },
    disable(mode) {
        setTimeout(() => {
            if (!mode.map || !mode.map.doubleClickZoom)
                return;
            // Always disable here, as it's necessary in some cases.
            mode.map.doubleClickZoom.disable();
        }, 0);
    },
};
//# sourceMappingURL=double_click_zoom.js.map