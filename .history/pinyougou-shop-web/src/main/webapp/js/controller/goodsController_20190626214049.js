//控制层 
app.controller('goodsController', function ($scope, $controller, goodsService, uploadService) {

	$controller('baseController', { $scope: $scope });//继承

	//读取列表数据绑定到表单中  
	$scope.findAll = function () {
		goodsService.findAll().success(
			function (response) {
				$scope.list = response;
			}
		);
	}

	//分页
	$scope.findPage = function (page, rows) {
		goodsService.findPage(page, rows).success(
			function (response) {
				$scope.list = response.rows;
				$scope.paginationConf.totalItems = response.total;//更新总记录数
			}
		);
	}

	//查询实体 
	$scope.findOne = function (id) {
		goodsService.findOne(id).success(
			function (response) {
				$scope.entity = response;
			}
		);
	}

	//增加商品
	$scope.add = function () {
		$scope.entity.goodsDesc.introduction = editor.html();
		goodsService.add($scope.entity).success(
			function (response) {
				if (response.success) {
					alert('保存成功');
					$scope.entity = {};
					editor.html("");//清空富文本编辑器
				} else {
					alert(response.message);
				}
			}
		);
	}


	//批量删除 
	$scope.dele = function () {
		//获取选中的复选框			
		goodsService.dele($scope.selectIds).success(
			function (response) {
				if (response.success) {
					$scope.reloadList();//刷新列表
					$scope.selectIds = [];
				}
			}
		);
	}

	$scope.searchEntity = {};//定义搜索对象 

	//搜索
	$scope.search = function (page, rows) {
		goodsService.search(page, rows, $scope.searchEntity).success(
			function (response) {
				$scope.list = response.rows;
				$scope.paginationConf.totalItems = response.total;//更新总记录数
			}
		);
	}

	//上传图片
	$scope.uploadFile = function () {
		uploadService.uploadFile().success(function (response) {
			if (response.success) {//如果上传成功，取出 url 
				$scope.image_entity.url = response.message;//设置文件地址 
			} else {
				alert(response.message);
			}
		}).error(function () {
			alert("上传发生错误");
		});
	};

	
});	
