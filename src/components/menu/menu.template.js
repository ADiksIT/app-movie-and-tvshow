export function createMenu() {
  return `
	<div class="hamburger active" data-classes="open">
		<span></span>
		<span></span>
		<span></span>
	</div>
	<ul class="left-menu__list">
		<li>
			<a href="#" id="search">
				<i class="fa fa-search" aria-hidden="true"></i>
				<span>ПОИСК</span>
			</a>
		</li>
		<li>
			<a href="#" class="dropdown" data-dropdown="rating">
				<i class="fa fa-trophy" aria-hidden="true"></i>
				<span>РЕЙТИНГ</span>
			</a>
			<ul class="dropdown-list">
				<li>
					<a href="#" id="top-rated">
						<span>Топ сериалы</span>
					</a>
				</li>
				<li>
					<a href="#" id="popular">
						<span>Популярные</span>
					</a>
				</li>

			</ul>
		</li>
		<li>
			<a href="#" class="dropdown" data-dropdown="popular">
				<i class="fa fa-tv" aria-hidden="true"></i>
				<span>НОВЫЕ ЭПИЗОДЫ</span>
			</a>
			<ul class="dropdown-list">
				<li>
					<a href="#" id="today">
						<span>Сегодня</span>
					</a>
				</li>
				<li>
					<a href="#" id="week">
						<span>На неделю</span>
					</a>
				</li>
			</ul>
			</li>
		</ul>
	`;
}
