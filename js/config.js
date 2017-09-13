var SPARQL_ENDPOINT = 'http://localhost:8890/sparql?query='

var TEMPLATE_QUERIES = {
        1 : {
		text : 'Give time point of a sample get rna analysis measurement', 
                variables: ['timepoint'], 
                query : readFile('sparqlQueries/template1.sparql', 'text')
		
            },
            
        2 : {
		text : 'Give time point of a sample and protein rna analysis  measurement', 
                variables: ['timepoint', 'protein'], 
                query : readFile('sparqlQueries/template2.sparql', 'text')
		
            },
            
        3 : {
		text : 'Give time point of a sample get all omics measurement', 
                variables: ['timepoint'], 
                query : readFile('sparqlQueries/template3.sparql', 'text')
		
            },
        4 : {
		text : 'Give time point of a sample and protein get all omics measurement', 
                variables: ['timepoint', 'protein'], 
                query : readFile('sparqlQueries/template4.sparql', 'text')
		
            }  
    };

var VARIABLE_QUERIES = {
        protein: readFile('sparqlQueries/getProteins.sparql', 'text'),
	timepoint: readFile('sparqlQueries/getTimepoints.sparql', 'text')

}

function readFile(url, dataType) {
    var content = null;    
    $.ajax({            
        url: url,            
        async: false,   
        cache: false,
        dataType: dataType,
        success: function(response) {   
            content = response;  
            console.log("Content of the file < " + url +"> is read successful")
        },
        error: function(xhr){
            var errorMsg = ("An error reading file : " + xhr.status + " " + 
                    xhr.statusText);
            alert(errorMsg);
            console.log(errorMsg)
        }
    });       
    return content;
}


