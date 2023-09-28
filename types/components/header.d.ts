import { LitElement } from 'lit';
import '@shoelace-style/shoelace/dist/components/button/button.js';
export declare class AppHeader extends LitElement {
    title: string;
    enableBack: boolean;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
