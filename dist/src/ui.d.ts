import type { DrawContext } from "./context.ts";
export declare class DrawUI {
    private buttonElements;
    private activeButton;
    private currentMapClasses;
    private nextMapClasses;
    private ctx;
    constructor(ctx: DrawContext);
    clearMapClasses(): void;
    queueMapClasses(options: {
        mode?: string | null;
        feature?: string | null;
        mouse?: string | null;
    }): void;
    updateMapClasses(): void;
    private createControlButton;
    deactivateButtons(): void;
    setActiveButton(id?: string): void;
    addButtons(): HTMLDivElement;
    removeButtons(): void;
}
