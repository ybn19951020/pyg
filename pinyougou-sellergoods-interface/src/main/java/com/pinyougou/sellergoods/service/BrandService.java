package com.pinyougou.sellergoods.service;

import java.util.List;
import java.util.Map;

import com.pinyougou.pojo.TbBrand;

import entity.PageResult;

/**
 * 品牌接口
 * 
 * @author ybn
 * @param <TbBrand>
 *
 */
public interface BrandService {

	public List<TbBrand> findAll();

	/**
	 * 品牌分页
	 * 
	 * @param pageNum
	 *            当前页码
	 * @param pageSize
	 *            每页记录数
	 * @return
	 */
	public PageResult findPage(int pageNum, int pageSize);

	/**
	 * 添加
	 * 
	 * @param tbBrand
	 */
	public void add(TbBrand Brand);

	/**
	 * 根据id查找单独一个
	 */

	public TbBrand findOne(long id);

	/**
	 * 修改
	 */
	public void update(TbBrand brand);

	/**
	 * 删除
	 */
	public void delete(long[] ids);

	/**
	 * 品牌分页
	 * 
	 * @param pageNum
	 *            当前页码
	 * @param pageSize
	 *            每页记录数
	 * @return
	 */
	public PageResult findPage(TbBrand brand, int pageNum, int pageSize);

	public List<Map> selectOptionList();
}
