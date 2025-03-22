from pydantic import BaseModel

class TranslateInput(BaseModel):
    params: dict
