export function createHeader() {
  return `
	<div class="container header-flex">
		<hgroup class="title-wrapper">
			<h1 class="title">KinoFlexHD</h1>
			<h2 class="subtitle">все о фильмах</h2>
		</hgroup>

		<section class="search">
			<form class="search__form">
				<h2 class="search__form-head">Поиск</h2>
				<label class="search__form-block">
					<input type="text" class="search__form-input" id="searchText"
						placeholder="Введи название...">
				</label>
			</form>
		</section>
	</div>
	`;
}
