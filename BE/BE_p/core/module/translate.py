from typing_extensions import Literal

class Translate:
    def __init__(self):
        pass

    def run(self, text: str, _language: Literal['en', 'ko']) -> str:
        return text
