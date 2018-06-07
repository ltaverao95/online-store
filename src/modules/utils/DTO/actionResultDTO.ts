import {
    UtilsConstants
} from '../';

class ActionResultDTO{

    public Result: UtilsConstants.EnumResult = UtilsConstants.EnumResult.SUCCESS;
    public UIMessage: string;
    public StackTrace: string;
    public ResultData: any;

    public get IsOk(){
        return this.Result === UtilsConstants.EnumResult.SUCCESS;
    }

    public get HasErrors(){
        return this.Result === UtilsConstants.EnumResult.ERROR;
    }

    public SetError(errorMessage: string): ActionResultDTO{
    
        this.Result = UtilsConstants.EnumResult.ERROR;
        this.UIMessage = errorMessage;

        return this;
    }

    public SetErrorAndStackTrace(errorMessage: string, stackTrace: string): ActionResultDTO{

        this.SetError(errorMessage);
        this.StackTrace = stackTrace;

        return this;
    }
}

export {
    ActionResultDTO
}