from fastapi import FastAPI, HTTPException
from core.module.translate import Translate
from utils.datamodel import TranslateInput

app = FastAPI()

@app.get("/translate", tags=['Core'])
def translate(inputs: TranslateInput):
    ''' Translation API 입니다.'''
    try:
        translate_module = Translate()
        result = translate_module.run(inputs.params['text'], inputs.params['language'])
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e
