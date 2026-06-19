export function escapeHtml(value) {
    return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
export function escapeAttr(value) {
    return escapeHtml(value).replaceAll('"', "&quot;");
}
export function formatDate(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
}
//# sourceMappingURL=html.js.map