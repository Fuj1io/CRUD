// clean_format_for_.env
export const clean = (val) => {
    return (typeof val === "string" ?
    val.replace(/^["']|["']$/g, "").trim() : val);
}