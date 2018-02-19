# typescript-jsPDF
Test project to assist with writing TypeScript for the Parallax jsPDF HTML PDF Generator.

When trying to develope against jsPDF for a TypeScript project we found it cumbersome to develop the code to generate a PDF within our existing app and the sample editor on the Parallax site wasn't large enough and wasn't using TypeScript. This allowed us to fairly quickly develop some pretty amazing PDF generation code in TypeScript.

## Getting Started
You have two options for loading the page
1.  Load the local html file
Since we reference the required libraries directly to CDN (or GitHub) you can open the index.html file directly in your local browser.
2. Serve using http-server
If you want to load your typescript from a local file or serve additional resouces you can use http-server. This method will be more useful if there's a bigger need to load sample TypeScript files.

### Using Http-Server
```bash
$ npm install
$ npm start
```

### Start Development
Once the website has loaded successfully you should have a code editor on the left and a sample PDF file on the right. As you make changes in the editor, the TypeScript is recompiled, the createPdf() method is called on your service to generate a PDF, and the output is displayed inline to the iFrame.

## Credits &amp; References
- Thanks to [James Hall](https://github.com/MrRio) for [jsPDF](https://github.com/MrRio/jsPDF)
- Thanks to [Parallax Agency](https://parall.ax/products/jspdf) for the demo and sample JavaScript code
- Thanks to Ajax.org for [Ace](https://github.com/ajaxorg/ace) (Cloud9 Editor)
- Thanks to Microsoft for [TypeScript](https://github.com/Microsoft/TypeScript)