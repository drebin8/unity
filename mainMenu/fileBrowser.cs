//

//Name : CTreeView.cs

//Desc : Use this class to show a browse window like a tree view

//      u can choose folder and file

//Auth : Nette

//Date : 10-25-2008 

//

 

 

using UnityEngine;

using System.IO;

using System.Collections;

 

public class fileBrowser : MonoBehaviour {

    

    public Rect winRect = new Rect(20,20,120,50);   //windows basic rect

    public string location;

    private Vector2 scrollPosition;

    

    private string[] strs;  //record the special level's selection

    private int index;

    private string path;    //this is the selected file's full name

    

    public GUIStyle fileStyle;                      //if the item is a file use this style

    public GUIStyle dirStyle;                       //if the item is a directory use this style

    

    public string filter;                           //filter of file select

    

    public Texture2D fileTexture;                   //the file texture

    public Texture2D dirTexture;                    //the directory texture

    
	
	

    void Awake()

    {

        location = Application.dataPath;
		
        strs = new string[20];

        index = 0;

        path = location;
		

    }

    

    void OnGUI()

    {

        winRect = GUILayout.Window(1, winRect, DoMyWindow, "Browser");

    }

    

    void DoMyWindow(int windowID)

    {

        OpenFileWindow(location);

        GUI.DragWindow ();

    }

    

    void OpenFileWindow( string location )

    {

        scrollPosition = GUILayout.BeginScrollView (scrollPosition,GUILayout.Width(400),GUILayout.Height(400));

        GUILayout.BeginVertical();

            FileBrowser( location, 0, 0);   

        GUILayout.EndVertical();

        GUILayout.EndScrollView ();

        GUILayout.Label("Selected:" + path);

    }

    

    void FileBrowser( string location, int spaceNum, int index)

    {

        FileInfo fileSelection;

        DirectoryInfo directoryInfo;

        DirectoryInfo directorySelection;

        

        //

        fileSelection = new FileInfo( location );

        if( fileSelection.Attributes == FileAttributes.Directory )

            directoryInfo = new DirectoryInfo( location );

        else

            directoryInfo = fileSelection.Directory;

            

        //

        GUILayout.BeginVertical();

            

            foreach( DirectoryInfo dirInfo in directoryInfo.GetDirectories())

            {

                GUILayout.BeginHorizontal();

                GUILayout.Space(spaceNum);

                GUILayout.Label(dirTexture,dirStyle,GUILayout.Width(12));

                if( GUILayout.Button(dirInfo.Name, dirStyle) )

                {

                    strs[index] = dirInfo.FullName;

                    path = dirInfo.FullName;    

                }

                GUILayout.EndHorizontal();

                if( dirInfo.FullName == strs[index] && strs[index] != location )

                    FileBrowser(strs[index], spaceNum + 20, index+1);               

            }

            

            //list the special file with speical style and texture under current directory

            //if( filter=="") filter = "*.*";

            fileSelection = SelectList(directoryInfo.GetFiles(), null, fileStyle, fileTexture, spaceNum) as FileInfo;

            if( fileSelection != null )

                path = fileSelection.FullName;

                

        GUILayout.EndVertical();    

    }

    

    private object SelectList( ICollection list, object selected, GUIStyle style, Texture image, int spaceNum)

    {

        foreach( object item in list )

        {

            //just show the name of directory and file

            FileSystemInfo info = item as FileSystemInfo;

            GUILayout.BeginHorizontal();

            GUILayout.Space(spaceNum);

            GUILayout.Label(image,style,GUILayout.Width(12));

            if( GUILayout.Button(info.Name, style) )

            {

                selected = item;

            }

            GUILayout.EndHorizontal();

        }

        return selected;

    }

}

//public static bool fileBrowser( ref string location, ref Vector2 directoryScroll, ref Vector2 fileScroll )
//{
//    bool complete;
//    DirectoryInfo directoryInfo;
//    DirectoryInfo directorySelection;
//    FileInfo fileSelection;
//    int contentWidth;
// 
// 
//    // Our return state - altered by the "Select" button
//    complete = false;
// 
//    // Get the directory info of the current location
//    fileSelection = new FileInfo( location );
//    if( (fileSelection.Attributes & FileAttributes.Directory) == FileAttributes.Directory )
//    {
//    	directoryInfo = new DirectoryInfo( location );
//    }
//    else
//    {
//    	directoryInfo = fileSelection.Directory;
//    }
// 
// 
//    if( location != "/" && GUI.Button( new Rect( 10, 20, 410, 20 ), "Up one level" ) )
//    {
//        directoryInfo = directoryInfo.Parent;
//        location = directoryInfo.FullName;
//    }
// 
// 
//    // Handle the directories list
//    GUILayout.BeginArea( new Rect( 10, 40, 200, 300 ) );
//        GUILayout.Label( "Directories:" );
//        directoryScroll = GUILayout.BeginScrollView( directoryScroll );
//    	    directorySelection = BehaveLibrary.Resources.SelectList( directoryInfo.GetDirectories(), null ) as DirectoryInfo;
//    	GUILayout.EndScrollView();
//    GUILayout.EndArea();
// 
//    if( directorySelection != null )
//    // If a directory was selected, jump there
//    {
//        location = directorySelection.FullName;
//    }
// 
// 
//    // Handle the files list
//    GUILayout.BeginArea( new Rect( 220, 40, 200, 300 ) );
//        GUILayout.Label( "Files:" );
//        fileScroll = GUILayout.BeginScrollView( fileScroll );
//        	fileSelection = BehaveLibrary.Resources.SelectList( directoryInfo.GetFiles(), null ) as FileInfo;
//    	GUILayout.EndScrollView();
//    GUILayout.EndArea();
// 
//    if( fileSelection != null )
//    // If a file was selected, update our location to it
//    {
//        location = fileSelection.FullName;
//    }
// 
// 
//    // The manual location box and the select button
//    GUILayout.BeginArea( new Rect( 10, 350, 410, 20 ) );
//    GUILayout.BeginHorizontal();		
//    	location = GUILayout.TextArea( location );
// 
//    	contentWidth = ( int )GUI.skin.GetStyle( "Button" ).CalcSize( new GUIContent( "Select" ) ).x;
//    	if( GUILayout.Button( "Select", GUILayout.Width( contentWidth ) ) )
//    	{
//    		complete = true;
//    	}
//    GUILayout.EndHorizontal();
//    GUILayout.EndArea();
// 
// 
//    return complete;
//}