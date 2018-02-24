from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, func, Boolean
from sqlalchemy.orm import relationship

Base = declarative_base()


class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)


class Category(Base):
    __tablename__ = 'category'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(String(200))
    created_on = Column(DateTime, default=func.now())
    created_by = Column(String(250), nullable=False)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    user = relationship("User")
    card = relationship("Card")


class Card(Base):
    __tablename__ = 'card'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    translated_name = Column(String(250), nullable=False)
    #memorized = Column(Integer)
    memorized_bool = Column(Boolean)
    created_on = Column(DateTime, default=func.now())
    created_by = Column(String(250), nullable=False)
    category = relationship("Category")
    category_id = Column(Integer, ForeignKey('category.id'))
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship("User")


engine = create_engine('sqlite:///flashcard.db')
Base.metadata.create_all(engine)
