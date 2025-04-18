<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<!-- 
                    replace가 있고 없고의 차이 
                    : replace가 true일 경우, history가 남지 않음
                    ex) about > nested > nested/one 인 경우 뒤로가기하면 nested없이 about으로 이동됨
                    반면에, replace가 없을 경우에는 history가 남아서 뒤로가기하면 nested로 이동됨
                -->
				<!-- <RouterLink class="nav-link" active-class="active" to="/nested/one"> -->
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedOne', replace: true }"
				>
					Nested One
				</RouterLink>
			</li>
			<li class="nav-item">
				<!-- <RouterLink class="nav-link" active-class="active" to="/nested/two"> -->
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedTwo', replace: true }"
				>
					Nested Two
				</RouterLink>
			</li>
		</ul>
		<hr class="my-4" />
		<RouterView></RouterView>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
