
		function setLanguage(lang) {
			$('#furniture_tag').text(lang.furniture_tag);
			$('#tutorial_tag').text(lang.tutorial_tag);
			$('#furnture_assembly_tag').text(lang.furniture_tag);
			$('#pra_tag').text(lang.pra_tag);
			$('#read_more').text(lang.read_more);
			$('#read_more_tut').text(lang.read_more);
			$('#pra_tag_tutor').text(lang.pra_tag_tutor);
			$('#scan_code').text(lang.scan_code);
			
		}

		function clearLanguage() {
			$('#en').css('background-color', 'transparent');
			$('#cn').css('background-color', 'transparent');
		}