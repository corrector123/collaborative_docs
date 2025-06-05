import Editor from '../..';
import { PluginFunction } from '../../interface/Plugin';
export declare class Plugin {
    private editor;
    constructor(editor: Editor);
    use<Options>(pluginFunction: PluginFunction<Options>, options?: Options): void;
}
