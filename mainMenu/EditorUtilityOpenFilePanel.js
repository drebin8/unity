#pragma strict

// Opens a file selection dialog for a PNG file and overwrites any
// selected texture with the contents.

//class EditorUtilityOpenFilePanel {
//    @MenuItem("Examples/Overwrite Texture")
//    static function Apply () {
//        var texture : Texture2D = Selection.activeObject;
//        if (texture == null) {
//            EditorUtility.DisplayDialog(
//                "Select Texture",
//                "You Must Select a Texture first!",
//                "Ok");
//            return;
//        }
//        var path = EditorUtility.OpenFilePanel(
//                "Overwrite with png",
//                "",
//                "png");
//        if (path.Length != 0) {
//            var www = WWW("file:///" + path);
//            www.LoadImageIntoTexture(texture);
//        }
//    }
//}