import type { DrawContext } from "./context.ts";
import type { Feat } from "./feature_types/feature.ts";
export declare class DrawStore {
    private _features;
    private _featureIds;
    private _selectedFeatureIds;
    private _selectedCoordinates;
    private _changedFeatureIds;
    private _emitSelectionChange;
    private _mapInitialConfig;
    private ctx;
    isDirty: boolean;
    sources: {
        hot: any[];
        cold: any[];
    };
    render: () => void;
    constructor(ctx: DrawContext);
    createRenderBatch(): () => void;
    setDirty(): DrawStore;
    featureChanged(featureId: string | number): DrawStore;
    getChangedIds(): (string | number)[];
    clearChangedIds(): DrawStore;
    getAllIds(): (string | number)[];
    add(feature: Feat): DrawStore;
    delete(featureIds: string | number | (string | number)[], options?: {
        silent?: boolean;
    }): DrawStore;
    get(id: string | number): Feat | undefined;
    getAll(): Feat[];
    select(featureIds: string | number | (number | string)[], options?: {
        silent?: boolean;
    }): DrawStore;
    deselect(featureIds: string | (string | number)[], options?: {
        silent?: boolean;
    }): DrawStore;
    clearSelected(options?: {
        silent?: boolean;
    }): DrawStore;
    setSelected(featureIds: string | number | (string | number)[] | undefined, options?: {
        silent?: boolean;
    }): DrawStore;
    setSelectedCoordinates(coordinates: Array<{
        coord_path: string;
        feature_id: string;
    }>): DrawStore;
    clearSelectedCoordinates(): DrawStore;
    getSelectedIds(): (string | number)[];
    getSelected(): Feat[];
    getSelectedCoordinates(): {
        coordinates: any[];
    }[];
    isSelected(featureId: string): boolean;
    setFeatureProperty(featureId: string, property: string, value: any): void;
    private refreshSelectedCoordinates;
    storeMapConfig(): void;
    restoreMapConfig(): void;
    getInitialConfigValue(interaction: string): boolean;
}
