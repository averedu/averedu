package com.msu.common.vo;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;

public class DefaultVO implements DataSetRowTypeAccessor {
	
	private int rowType;

	@Override
    public int getRowType() {
        return this.rowType;
    }

	@Override
    public void setRowType(int rowType) {
        this.rowType = rowType;
    }	
}
