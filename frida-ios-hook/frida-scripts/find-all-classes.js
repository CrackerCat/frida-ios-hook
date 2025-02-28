/*
Find All Classes v1.1
*/
function show_classes_of_app()
{
    console.log("[*] Started: Find Classes")
    var count = 0
    for (var className in ObjC.classes)
    {
        if (ObjC.classes.hasOwnProperty(className))
        {
            console.log(className);
            count = count + 1
        }
    }
    console.log("\n[*] Classes found: " + count);
    console.log("[*] Completed: Find Classes")
}

if (ObjC.available)
{
    setTimeout(show_classes_of_app, 1000);
}
else
{
    console.log("Objective-C Runtime is not available!");
}
