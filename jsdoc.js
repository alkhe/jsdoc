$(document).ready(function() {

	$("#description").val("Interfaces address calls between the kernel and the Java service.");
	$("#parameter").val("semAddress  The offset at which the semaphore is stored\nvolatility  Whether the data is volatile");
	$("#return").val("true if the operation was successful, false if the paging system denied priviledges");

	var update = function() {
		if ($("#autoupdate").is(":checked"))
			setTimeout(function() {
				$("#createDoc").click();}
				, 0);
	}

	$(window).keydown(function(e) {
		update();
	});

	$("#deprecated").change(function(e) {
		update();
	});

	$("#autoupdate").change(function(e) {
		update();
	});

	$("#createDoc").click(function(e) {
		var javaDoc = "/**";

		var descriptionDoc = $("#description").val();
		if (descriptionDoc) {
			descriptionDoc = descriptionDoc.replace(/^\s+|\s+$/g, '');
			descriptionDoc = descriptionDoc.replace(/\n/g, '\n * ');
			descriptionDoc = "\n * " + descriptionDoc;
			javaDoc += descriptionDoc;
		}

		if($("#deprecated").is(":checked")) {
			javaDoc += "\n * \n * @deprecated";
		}

		var parameterDoc = $("#parameter").val();
		if (parameterDoc) {
			parameterDoc = parameterDoc.replace(/^\s+|\s+$/g, '');
			parameterDoc = parameterDoc.replace(/\n/g, '\n * @param ');
			parameterDoc = "\n * \n * @param " + parameterDoc;
			javaDoc += parameterDoc;
		}

		var returnDoc = $("#return").val();
		if (returnDoc) {
			returnDoc = returnDoc.replace(/^\s+|\s+$/g, '').replace(/\n{1,}/g, ' ');
			returnDoc = "\n * \n * @return " + returnDoc;
			javaDoc += returnDoc;
		}

		javaDoc += "\n */";
		$("#javadoc").val(javaDoc);
		
	});

	$("#changeFont").click(function(e) {
		if ($("body").hasClass('source')) {
			$("body").removeClass();
			$("body").addClass('courier');
		}
		else if ($("body").hasClass('courier')) {
			$("body").removeClass();
			$("body").addClass('consolas');
		}
		else {
			$("body").removeClass();
			$("body").addClass('source');
		}
	});

	$("#clearAll").click(function(e) {
		$("textarea").not("#javadoc").val("");
		update();
	});

	$("#createDoc").click();
});
