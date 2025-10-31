$(document).ready(function() {
	let currentFilter = '全て';

	function closeMobileMenuIfNeeded() {
		// no-op here; page-specific script
	}

	function filterNews() {
		const $items = $('#p-news-list .p-news-item');
		if ($items.length === 0) return;

		$items.each(function() {
			const $item = $(this);
			const category = ($item.find('.p-news-category').text() || '').trim();
			const match = (currentFilter === '全て' || category === currentFilter);
			$item.toggle(match);
			if (match) {
				$item.css('display', 'flex');
			}
		});
	}

	$('.p-news-filter-btn').on('click', function(e) {
		e.preventDefault();
		const $btn = $(this);
		$('.p-news-filter-btn').removeClass('active');
		$btn.addClass('active');

		currentFilter = ($btn.attr('data-filter') || $btn.text() || '').trim();
		filterNews();
	});

	// 初期表示（active があればそれを優先）
	const $initial = $('.p-news-filter-btn.active').first();
	if ($initial.length) {
		$initial.trigger('click');
	} else {
		filterNews();
	}
});