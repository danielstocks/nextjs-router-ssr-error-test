export default async function exitPreview(req, res) {
  res.clearPreviewData();
  res.redirect("/");
}
